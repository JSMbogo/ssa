import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { Webhook } from "svix";

const http = httpRouter();

http.route({
    path: "/clerk",
    method: "POST",
    handler: httpAction(async (ctx, request) => {
        const payloadString = await request.text();
        const headerPayload = request.headers;

        try {
            const svix_id = headerPayload.get("svix-id");
            const svix_timestamp = headerPayload.get("svix-timestamp");
            const svix_signature = headerPayload.get("svix-signature");

            if (!svix_id || !svix_timestamp || !svix_signature) {
                return new Response("Error occured -- no svix headers", {
                    status: 400,
                });
            }

            const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
            const evt = wh.verify(payloadString, {
                "svix-id": svix_id,
                "svix-timestamp": svix_timestamp,
                "svix-signature": svix_signature,
            }) as any;

            const { id, email_addresses, first_name, last_name } = evt.data;
            const email = email_addresses[0]?.email_address;
            const name = `${first_name || ""} ${last_name || ""}`.trim();

            switch (evt.type) {
                case "user.created":
                    await ctx.runMutation(internal.users.createUser, {
                        clerkId: id,
                        email,
                        name,
                        // default role is individual
                        role: "individual",
                    });
                    break;
                case "user.updated":
                    await ctx.runMutation(internal.users.updateUser, {
                        clerkId: id,
                        email,
                        name,
                    });
                    break;
                case "user.deleted":
                    await ctx.runMutation(internal.users.deleteUser, {
                        clerkId: id,
                    });
                    break;
            }

            return new Response(null, { status: 200 });
        } catch (err) {
            console.error("Webhook Error:", err);
            return new Response("Error occured", { status: 400 });
        }
    }),
});

export default http;

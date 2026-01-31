import { v } from "convex/values";
import { internalMutation, query } from "./_generated/server";

export const createUser = internalMutation({
    args: {
        clerkId: v.string(),
        email: v.string(),
        name: v.optional(v.string()),
        role: v.optional(v.union(
            v.literal('admin'),
            v.literal('organization'),
            v.literal('individual'),
            v.literal('compliance')
        )),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("users", {
            clerkId: args.clerkId,
            email: args.email,
            name: args.name,
            role: args.role,
        });
    },
});

export const updateUser = internalMutation({
    args: {
        clerkId: v.string(),
        email: v.optional(v.string()),
        name: v.optional(v.string()),
        role: v.optional(v.union(
            v.literal('admin'),
            v.literal('organization'),
            v.literal('individual'),
            v.literal('compliance')
        )),
    },
    handler: async (ctx, args) => {
        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
            .unique();

        if (user) {
            await ctx.db.patch(user._id, {
                email: args.email ?? user.email,
                name: args.name ?? user.name,
                role: args.role ?? user.role,
            });
        }
    },
});

export const deleteUser = internalMutation({
    args: { clerkId: v.string() },
    handler: async (ctx, args) => {
        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
            .unique();

        if (user) {
            await ctx.db.delete(user._id);
        }
    },
});

export const viewer = query({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            console.log("Viewer Query: No identity found");
            return null;
        }
        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
            .unique();

        console.log("Viewer Query Debug:", {
            identitySubject: identity.subject,
            userFound: !!user,
            userRole: user?.role,
            userClerkId: user?.clerkId
        });

        return user;
    },
});

import { createFileRoute } from '@tanstack/react-router'
import { SignUp } from '@clerk/clerk-react'

export const Route = createFileRoute('/sign-up')({
    component: SignUpPage,
})

function SignUpPage() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)] py-12">
            <SignUp path="/sign-up" signInUrl="/sign-in" forceRedirectUrl="/" />
        </div>
    )
}

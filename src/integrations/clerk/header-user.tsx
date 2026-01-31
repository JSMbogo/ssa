import {
  SignedIn,
  SignInButton,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react'
import { UserCircle } from 'lucide-react'

export default function HeaderUser() {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <div className="flex items-center gap-2 text-lg lg:text-[10px] font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors cursor-pointer whitespace-nowrap">
            <UserCircle className="w-5 h-5" />
            <span>Sign In</span>
          </div>
        </SignInButton>
      </SignedOut>
    </>
  )
}

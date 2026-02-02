import {
  SignedIn,
  SignInButton,
  SignedOut,
  UserButton,
  ClerkLoading,
  ClerkLoaded,
} from '@clerk/clerk-react'
import { UserCircle, ChevronDown, Building2, ShieldCheck } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { Link } from '@tanstack/react-router'

export default function HeaderUser() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <ClerkLoading>
        <div className="flex items-center gap-2 text-lg lg:text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50 whitespace-nowrap">
          <UserCircle className="w-5 h-5" />
          <span>Wait...</span>
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 text-lg lg:text-[10px] font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors cursor-pointer whitespace-nowrap focus:outline-none"
            >
              <UserCircle className="w-5 h-5" />
              <span>Sign In</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="absolute right-0 top-full mt-4 w-48 bg-white border border-border rounded-lg shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                <div className="px-4 py-2 border-b border-border/50 bg-secondary/10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Select Role</span>
                </div>

                <Link
                  to="/sign-in"
                  search={{ role: 'compliance' }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-foreground hover:bg-secondary/10 hover:text-primary transition-colors"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Compliance Manager</span>
                </Link>

                <Link
                  to="/sign-in"
                  search={{ role: 'organization' }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-foreground hover:bg-secondary/10 hover:text-primary transition-colors"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Organization</span>
                </Link>
              </div>
            )}
          </div>
        </SignedOut>
      </ClerkLoaded>
    </>
  )
}

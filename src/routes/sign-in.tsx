import { createFileRoute } from '@tanstack/react-router'
import { SignIn } from '@clerk/clerk-react'
import { ShieldCheck, Building2, UserCircle } from 'lucide-react'
import { z } from 'zod'

const searchSchema = z.object({
  role: z.enum(['compliance', 'organization']).optional(),
})

export const Route = createFileRoute('/sign-in')({
  validateSearch: searchSchema,
  component: SignInPage,
})

function SignInPage() {
  const { role } = Route.useSearch()

  const getTitle = () => {
    switch (role) {
      case 'compliance':
        return {
          title: 'Compliance Portal',
          subtitle: 'Secure access for compliance managers',
          icon: <ShieldCheck className="w-12 h-12 text-africa-gold" />,
        }
      case 'organization':
        return {
          title: 'Organization Login',
          subtitle: 'Manage your reports and compliance',
          icon: <Building2 className="w-12 h-12 text-africa-red" />,
        }
      default:
        return {
          title: 'Welcome Back',
          subtitle: 'Sign in to your account',
          icon: <UserCircle className="w-12 h-12 text-primary" />,
        }
    }
  }

  const { title, subtitle, icon } = getTitle()

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Visual Side */}
      <div className="w-full md:w-1/2 lg:w-5/12 bg-primary relative overflow-hidden flex flex-col justify-center p-12 text-primary-foreground min-h-[300px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="relative z-10 space-y-6">
          <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
            {icon}
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-black uppercase tracking-tighter">{title}</h1>
            <p className="text-lg opacity-80 font-medium">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 lg:w-7/12 flex items-center justify-center p-8 bg-secondary/5">
        <SignIn />
      </div>
    </div>
  )
}

import { Link } from '@tanstack/react-router'
import ClerkHeader from '@/integrations/clerk/header-user'
import { useState } from 'react'
import { Shield, Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/#services' },
    { name: 'Vision & Mission', to: '/#vision' },
    { name: 'Training', to: '/#training' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2 h-full border-r border-border pr-6">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-black tracking-tighter text-foreground uppercase">
              Speak Safe <span className="text-primary">Africa</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center h-full text-xs font-bold uppercase tracking-widest flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.to}
              className="px-6 h-full flex items-center gap-2 border-r border-border first:border-l text-foreground/60 transition-colors hover:text-primary hover:bg-secondary/20 relative group"
            >
              {link.name}
              {link.name === 'Training' && (
                <span className="absolute top-2 right-2 text-[8px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full leading-none">
                  SOON
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center h-full">
          <div className="hidden lg:flex items-center h-full">
            <Link
              to="/report"
              className="h-full bg-primary px-8 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-all border-l border-border flex items-center"
            >
              Report Incident
            </Link>
            <div className="px-6 h-full flex items-center justify-center border-l border-r border-border bg-secondary/5 hover:bg-secondary/10 transition-colors cursor-pointer w-[140px]">
              <ClerkHeader />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-6 text-foreground border-l border-border"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-b border-border bg-white animate-in slide-in-from-top duration-200">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.to}
                onClick={() => setIsOpen(false)}
                className="p-6 border-t border-border text-lg font-bold uppercase tracking-widest text-foreground/60 hover:text-primary hover:bg-secondary/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col border-t border-border">
              <div className="p-6 border-b border-border">
                <ClerkHeader />
              </div>
              <Link
                to="/report"
                onClick={() => setIsOpen(false)}
                className="p-6 bg-primary text-lg font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-colors block text-center"
              >
                Report Incident
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

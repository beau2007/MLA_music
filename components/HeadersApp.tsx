// components/layout/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/nos-cours', label: 'Nos Cours' },
  { href: '/nos-professeurs', label: 'Professeurs' },
  { href: '/evenements', label: 'Événements' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group shrink-0">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center transition-all group-hover:scale-105 group-hover:rotate-3 shadow-md shadow-amber-500/10">
              <Music className="text-slate-950 w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1.5 leading-tight">
              <span className="text-xl font-black text-slate-900 tracking-tight">Music Learn</span>
              <span className="text-amber-600 font-extrabold text-sm sm:text-xl tracking-tight">Academy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-bold tracking-wide transition-all duration-200 relative py-2 ${
                      isActive
                        ? 'text-amber-600'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>

            <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 font-bold px-5 rounded-xl text-sm shadow-sm">
              <Link href="/contact">
                Inscription
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 absolute top-20 left-0 right-0 bg-white border-b shadow-xl px-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-bold text-sm px-3 py-3 rounded-xl transition-colors ${
                      isActive 
                        ? 'bg-amber-50 text-amber-700' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
            
            <div className="pt-2 px-3">
              <Button asChild className="w-full bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold h-12 rounded-xl text-sm shadow-md shadow-amber-500/5">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  S'inscrire à un cours
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
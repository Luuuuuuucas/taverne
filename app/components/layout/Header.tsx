'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, COLORS } from '@/lib/constants'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-md' : 'py-4'
      }`}
      style={{ backgroundColor: COLORS.primary }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative h-16 w-36 mr-4">
              <Image
                src="/images/logo-taverne.jpg"
                alt="Logo La Taverne de Duchenot"
                fill
              />
            </div>
          </div>
          
          {/* Navigation Bureau */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="hover:border-b-2 transition-all duration-300 text-secondary"
                style={{ borderColor: COLORS.amber }}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Bouton Menu Mobile */}
          <button 
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? (
              <X size={24} color={COLORS.secondary} />
            ) : (
              <Menu size={24} color={COLORS.secondary} />
            )}
          </button>
        </div>
        
        {/* Navigation Mobile */}
        {menuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="block py-2 text-center text-secondary"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
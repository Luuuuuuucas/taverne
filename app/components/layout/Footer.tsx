import Link from 'next/link'
import Image from 'next/image'
import { Facebook } from 'lucide-react'
import { RESTAURANT_NAME, RESTAURANT_ADDRESS, RESTAURANT_PHONE, COLORS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="py-12 bg-primary text-secondary relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Logo et informations */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className="relative h-20 w-40 mb-4">
              <Image
                src="/images/logo-taverne.jpg"
                alt="Logo La Taverne de Duchenot"
                fill
                className="object-contain"
              />
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-sm mb-1">
                {RESTAURANT_ADDRESS}
              </p>
              <p className="text-sm">
                {RESTAURANT_PHONE}
              </p>
            </div>
          </div>
          
          {/* Espace central (peut contenir des liens ou rester vide) */}
          <div className="hidden md:block">
            {/* Espace intentionnellement vide */}
          </div>
          
          {/* Réseaux sociaux à droite */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center space-x-4 mb-4">
              <Link href="#" aria-label="Facebook" className="hover:text-amber transition-colors">
                <Facebook size={24} />
              </Link>
              
              {/* Logo TripAdvisor */}
              <Link 
                href="https://www.tripadvisor.fr/Restaurant_Review-g562728-d10343605-Reviews-La_Taverne_De_Duchenot-Saint_Omer_Pas_de_Calais_Hauts_de_France.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <div className="relative h-6 w-24">
                  <Image
                    src="/images/tripadvisor-logo.png"
                    alt="TripAdvisor"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
            
            <p className="text-xs text-secondary opacity-70 text-center md:text-right">
              Suivez-nous sur les réseaux sociaux
            </p>
          </div>
        </div>
        
        {/* Copyright en bas */}
        <div className="pt-6 mt-6 border-t w-full text-center" style={{ borderColor: `${COLORS.amber}40` }}>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {RESTAURANT_NAME}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
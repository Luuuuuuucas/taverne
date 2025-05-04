import { MapPin, Phone } from 'lucide-react'
import { RESTAURANT_ADDRESS, RESTAURANT_PHONE, COLORS } from '@/lib/constants'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title" style={{ color: COLORS.primary }}>
          Nous Trouver
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="p-6 rounded-lg" style={{ backgroundColor: COLORS.primary }}>
              <div className="text-secondary space-y-6">
                <div className="flex items-start">
                  <MapPin size={20} className="mt-1 mr-4 text-amber" />
                  <p>{RESTAURANT_ADDRESS}</p>
                </div>
                
                <div className="flex items-start">
                  <Phone size={20} className="mt-1 mr-4 text-amber" />
                  <p>{RESTAURANT_PHONE}</p>
                </div>
                
              </div>
            </div>
            
            <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.8981083854335!2d2.2427267769959917!3d50.753271694523286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc542fd801b7f3%3A0xe9db83a3db9ffdad!2s3%20Pl.%20Pierre%20Bonhomme%2C%2062500%20Saint-Omer%2C%20France!5e0!3m2!1sfr!2sfr!4v1683289456271!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          <div className="md:w-1/2 pt-6 md:pt-0">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif text-primary mb-6">Horaires d&apos;ouverture</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Dimanche - Lundi</span>
                  <div className="text-right">
                    <div>12h - 14h30</div>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Mardi</span>
                  <span className="text-gray-600">Fermé</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Mercredi - Samedi</span>
                  <div className="text-right">
                    <div>12h - 14h30</div>
                    <div>19h - 23h</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-serif text-primary mb-4">Réservations</h3>
                <p className="mb-2">Pour réserver une table, appelez-nous au :</p>
                <p className="text-xl font-bold text-primary mb-2">{RESTAURANT_PHONE}</p>
                <p className="text-sm text-gray-600">
                  Nous vous recommandons de réserver à l&apos;avance, surtout pour les weekends 
                  et jours fériés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
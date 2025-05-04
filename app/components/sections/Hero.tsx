import Image from 'next/image'
import { COLORS, RESTAURANT_PHONE } from '@/lib/constants'

export default function Hero() {
  return (
    <section 
      id="accueil" 
      className="relative h-[600px] bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/taverne-interior.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center p-8 mx-4 max-w-2xl">
          <div className="mb-8 flex justify-center">
            <div className="relative h-32 w-32">
              <Image
                src="/images/logo-taverne.jpg"
                alt="Logo La Taverne de Duchenot"
                fill
                className="object-contain rounded-full border-4"
                style={{ borderColor: COLORS.amber }}
                priority
              />
            </div>
          </div>
          <h1 
            className="text-4xl md:text-5xl font-serif mb-4"
            style={{ color: COLORS.secondary }}
          >
            Bienvenue à<br/>La Taverne de Duchenot
          </h1>
          <p 
            className="text-lg mb-8"
            style={{ color: COLORS.secondary }}
          >
            Une authentique brasserie où tradition et convivialité se rencontrent autour de plats généreux et bières artisanales
          </p>
          <p className="text-lg" style={{ color: COLORS.amber }}>
            Réservations au {" "}
            <span className="font-bold">{RESTAURANT_PHONE}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
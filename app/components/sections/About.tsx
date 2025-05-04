import Image from 'next/image'
import { COLORS } from '@/lib/constants'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title" style={{ color: COLORS.primary }}>
          Notre Histoire
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="mb-4">
              La Taverne de Duchenot est un estamient atypique ! 
              Venez découvrir notre carte du midi composée de cuisine régionale, 
              brasserie traditionnelle, ainsi qu&apos;une sélection de pizzas et salades !             </p>
            <p className="mb-4">
              Notre cuisine est réalisée maison, et exclusivement à base de produits frais ! 
              Nos spécialités sont le Welsh, le Burger maison et la Trilogie du Nord ! 
            </p>
            <p>
              Le soir, l&apos;ambiance s&apos;inscrit dans un esprit convivial du type 
              &quot;Bar à manger&quot;. La carte est plus restreinte mais saura pleinement vous satisfaire ! 
              Nous disposons du plus large choix de bières pression pour un restaurant, 
              avec une majorité de bières de Nord Pas de Calais !
            </p>
          </div>
          
          <div className="md:w-1/2 relative h-80 md:h-96 mt-8 md:mt-0">
            <div className="absolute inset-0 border-8 border-amber opacity-70 transform rotate-3 rounded z-0"></div>
                <Image
                src="/images/duchenot.png"
                alt="Devanture de Duchenot"
                fill
                className="object-cover rounded-lg shadow-lg z-10 transform -rotate-3"
                style={{ objectPosition: '50% 20%' }}  // Position horizontale 50%, verticale 20% (plus haut)
                />
          </div>
        </div>
      </div>
    </section>
  )
}
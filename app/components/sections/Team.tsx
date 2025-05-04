import Image from 'next/image'
import { KITCHEN_TEAM, SERVICE_TEAM } from '@/lib/constants'


export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-primary text-center mb-16">
          Notre Équipe
        </h2>
        
        {/* Section Cuisine */}
        <div className="mb-24">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-amber w-24 mr-6"></div>
            <h3 className="text-2xl font-serif text-tertiary">L&apos;Équipe Cuisine</h3>
            <div className="h-px bg-amber w-24 ml-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {KITCHEN_TEAM.map((member) => (
              <div key={member.id} className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  
                  {/* Image */}
                  <div className="relative h-96 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Bio on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                </div>
                
                <h4 className="text-xl font-serif text-primary mb-1">{member.name}</h4>
                <p className="text-amber font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Section Service */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-amber w-24 mr-6"></div>
            <h3 className="text-2xl font-serif text-tertiary">L&apos;Équipe de Salle</h3>
            <div className="h-px bg-amber w-24 ml-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {SERVICE_TEAM.map((member) => (
              <div key={member.id} className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  
                  {/* Image */}
                  <div className="relative h-96 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Bio on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                </div>
                
                <h4 className="text-xl font-serif text-primary mb-1">{member.name}</h4>
                <p className="text-amber font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
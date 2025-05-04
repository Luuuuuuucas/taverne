import Image from 'next/image'
import { COLORS } from '@/lib/constants'

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  category: string
  image: string
}

interface MenuCardProps {
  item: MenuItem
}

export default function MenuCard({ item }: MenuCardProps) {
  // Vérifier si l'item et ses propriétés sont définis
  if (!item || !item.image || !item.name) {
    return <div className="p-4 bg-gray-100 rounded-lg">Élément indisponible</div>;
  }

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      {/* Image du plat/boisson */}
      <div className="relative h-64 w-full">
        <Image
          src={item.image}
          alt={item.name || 'Élément du menu'}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Calque d'assombrissement au survol */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
      
      {/* Titre visible en permanence */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white text-center">
        <h3 
          className="text-xl font-serif"
          style={{ color: COLORS.primary }}
        >
          {item.name}
        </h3>
      </div>
      
      {/* Description qui apparaît au survol */}
      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
        <div className="text-white text-center max-w-xs">
          <p className="font-medium">{item.description}</p>
          <p className="absolute top-0 right-0 bg-primary text-secondary px-3 py-1 font-medium z-10">{item.price}</p>
        </div>
      </div>
    </div>
  )
}
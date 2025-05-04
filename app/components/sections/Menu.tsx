'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { MENU_ITEMS } from '@/lib/constants'
import { motion } from 'framer-motion'

export default function Menu() {
  // Définir les catégories de menu sans les desserts
  const FILTERED_CATEGORIES = ["Entrées", "Plats", "Bières"];
  
  const [activeCategory, setActiveCategory] = useState(FILTERED_CATEGORIES[0])
  const [filteredItems, setFilteredItems] = useState<{ id: number; name: string; description: string; price: string; category: string; image: string; }[]>([])
  
  // Utiliser useEffect pour mettre à jour les éléments filtrés quand la catégorie change
  useEffect(() => {
    const items = MENU_ITEMS ? MENU_ITEMS.filter(
      (item) => item && item.category === activeCategory
    ) : [];
    setFilteredItems(items);
  }, [activeCategory]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };
  
  return (
    <section id="menu" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Notre Carte
          </h2>
          <p className="max-w-2xl mx-auto text-tertiary">
            Des plats généreux préparés avec passion, accompagnés de nos bières artisanales
          </p>
        </div>
        
        {/* Navigation des catégories */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full shadow-md p-1">
            {FILTERED_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-primary text-white shadow-md" 
                    : "text-tertiary hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Grille des plats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory} // Force re-animation when category changes
        >
          {filteredItems && filteredItems.length > 0 ? (
            filteredItems.map((item) => item && (
              <motion.div 
                key={item.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                {/* Image principale mise en avant */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  {/* Badge de prix */}
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-medium shadow-md">
                    {item.price}
                  </div>
                </div>
                
                {/* Contenu texte */}
                <div className="p-6">
                  <h3 className="text-xl font-serif text-primary mb-2">
                    {item.name}
                  </h3>
                  <p className="text-tertiary text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center py-8 text-tertiary">
              Aucun élément trouvé dans cette catégorie.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
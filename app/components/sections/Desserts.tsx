'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { MENU_ITEMS, COLORS } from '@/lib/constants'

export default function Desserts() {
  const desserts = MENU_ITEMS.filter(item => item && item.category === "Desserts");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);
  
  // Fonction pour passer au dessert suivant avec animation
  const nextDessert = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % desserts.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  // Autoplay pour le carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextDessert();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // S'assurer que tous les desserts sont disponibles
  if (!desserts || desserts.length === 0) {
    return (
      <section id="desserts" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="section-title" style={{ color: COLORS.primary }}>
            Nos Desserts Maison
          </h2>
          <p className="text-center">Aucun dessert disponible pour le moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="desserts" className="py-20 relative overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-secondary opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/images/dessert-pattern.jpg')] opacity-10 mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-cursive text-primary mb-3">
            Nos Douceurs Maison
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-tertiary">
            Chaque dessert est préparé avec passion dans notre cuisine, 
            selon nos recettes jalousement gardées.
          </p>
        </div>
        
        {/* Carrousel de desserts */}
        <div className="max-w-6xl mx-auto relative">
          {/* Cadre décoratif */}
          <div className="absolute -top-8 -bottom-8 -left-8 -right-8 border-8 border-amber opacity-20 rounded-lg"></div>
          
          {/* Affichage principal du carrousel */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden relative" ref={carouselRef}>
            <div className="flex items-center min-h-[500px]">
              {/* Côté image */}
              <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative overflow-hidden">
                <div className="absolute inset-0 bg-tertiary/10"></div>
                <Image 
                  src={desserts[activeIndex].image}
                  alt={desserts[activeIndex].name}
                  fill
                  className={`object-cover transition-all duration-500 ${isAnimating ? 'scale-110 blur-sm' : 'scale-100'}`}
                />
                
                {/* Bordure décorative */}
                <div className="absolute inset-0 border-r-8 border-amber opacity-20"></div>
              </div>
              
              {/* Côté description */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                {/* Élément décoratif */}
                <div className="absolute top-6 right-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6C12 3.79086 10.2091 2 8 2H2V8C2 10.2091 3.79086 12 6 12C3.79086 12 2 13.7909 2 16V22H8C10.2091 22 12 20.2091 12 18C12 20.2091 13.7909 22 16 22H22V16C22 13.7909 20.2091 12 18 12C20.2091 12 22 10.2091 22 8V2H16C13.7909 2 12 3.79086 12 6Z" stroke={COLORS.amber} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className={`transition-all duration-500 transform ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
                  <h3 className="text-4xl font-cursive text-primary mb-6">
                    {desserts[activeIndex].name}
                  </h3>
                  
                  <p className="text-lg mb-8 text-tertiary">
                    {desserts[activeIndex].description}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="font-hand text-3xl font-bold text-amber mr-3">
                      {desserts[activeIndex].price}
                    </div>
                    
                    <div className="h-px bg-gray-300 flex-grow"></div>
                    
                    <div className="ml-3 text-sm text-gray-500 font-medium border border-gray-300 px-3 py-1 rounded-full">
                      Fait Maison
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Indicateurs du carrousel en bas */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {desserts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Voir le dessert ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
          
          {/* Carrousel miniature en bas */}
          <div className="mt-8 flex justify-center gap-4 overflow-x-auto pb-4">
            {desserts.map((dessert, index) => (
              <button
                key={dessert.id}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  index === activeIndex 
                    ? 'ring-4 ring-amber' 
                    : 'ring-1 ring-gray-200 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="w-16 h-16 relative">
                  <Image 
                    src={dessert.image}
                    alt={dessert.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
          
          {/* Décoration manuscrite */}
          <div className="absolute bottom-0 right-0 -mb-20 -mr-20 opacity-5">
            <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,10 C30,90 170,10 190,100 C170,190 30,110 10,190 C30,110 170,90 190,10 C170,90 30,190 10,10 Z" fill={COLORS.primary} />
            </svg>
          </div>
        </div>
        
        {/* Note du chef pâtissier */}
        <div className="mt-16 text-center">
          <div className="inline-block max-w-2xl bg-white px-8 py-6 rounded-lg shadow-md border-t-4 transform -rotate-1" style={{ borderColor: COLORS.amber }}>
            <p className="font-hand text-lg text-tertiary">
              &quot;Nos desserts sont préparés chaque matin avec des ingrédients frais et de saison. 
              Je vous conseille particulièrement notre spécialité, la Tarte Tatin, 
              dont la recette est dans notre famille depuis trois générations.&quot;
            </p>
            <div className="mt-3 text-right font-cursive text-lg text-primary">
              - Sandrine, Chef Pâtissière
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
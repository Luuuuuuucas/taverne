import type { Metadata } from 'next'
import { Playfair_Display, Roboto_Slab } from 'next/font/google'
import './globals.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap' 
})

const roboto = Roboto_Slab({ 
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap' 
})

export const metadata: Metadata = {
  title: 'La Taverne de Duchenot | Brasserie Traditionnelle',
  description: 'Une authentique brasserie parisienne où tradition et convivialité se rencontrent autour de plats généreux et bières artisanales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${playfair.variable} ${roboto.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
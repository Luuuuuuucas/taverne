'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { COLORS } from '@/lib/constants'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    alert('Message envoyé avec succès!')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 border border-amber/20 rounded-lg shadow-md bg-cream">
      <h3 className="text-xl font-serif mb-4 text-primary">Envoyez-nous un message</h3>
      
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-gray-300 bg-white focus:border-amber focus:ring-amber"
        />
      </div>
      
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-gray-300 bg-white focus:border-amber focus:ring-amber"
        />
      </div>
      
      <div>
        <Input
          type="text"
          name="subject"
          placeholder="Sujet"
          value={formData.subject}
          onChange={handleChange}
          className="border-gray-300 bg-white focus:border-amber focus:ring-amber"
        />
      </div>
      
      <div>
        <Textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
          className="border-gray-300 bg-white min-h-32 focus:border-amber focus:ring-amber"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full py-3 taverne-button"
        style={{ 
          backgroundColor: COLORS.primary,
          color: COLORS.secondary
        }}
      >
        Envoyer
      </Button>
    </form>
  )
}
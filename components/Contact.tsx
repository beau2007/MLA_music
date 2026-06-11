// app/contact/page.tsx
'use client'

import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  AlertTriangle, 
  Sparkles 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Contact() {
  const [isError, setIsError] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instrument: 'Piano',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulation de l'absence de base de données / panne technique
    setIsError(true)
    
    // Le message d'erreur reste visible 6 secondes pour laisser le temps de le lire
    setTimeout(() => setIsError(false), 6000)
  }

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-amber-500 text-slate-950 hover:bg-amber-400 mb-6 font-bold uppercase tracking-wider">
              Une question ? Un cours d'essai ?
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Contactez notre équipe pédagogique
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              Que vous soyez débutant sans aucune notion musicale ou musicien désireux de vous perfectionner, nous sommes là pour vous guider.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Information Column (1/3) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Nos Coordonnées</h2>
              <p className="text-sm text-slate-500">N'hésitez pas à nous joindre directement par téléphone ou par message.</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* Téléphone */}
              <Card className="border-slate-200/60 shadow-sm bg-white">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Téléphone</div>
                    <p className="text-slate-900 font-semibold text-sm">+237 657 54 15 47</p>
                    <p className="text-xs text-slate-500">Lun - Sam, 9h à 20h</p>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-slate-200/60 shadow-sm bg-white">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Email direct</div>
                    <p className="text-slate-900 font-semibold text-sm truncate">contact@musiclearnacademy.fr</p>
                    <p className="text-xs text-slate-500">Réponse sous 24h ouvrées</p>
                  </div>
                </CardContent>
              </Card>

              {/* Localisation */}
              <Card className="border-slate-200/60 shadow-sm bg-white">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Notre Académie</div>
                    <p className="text-slate-900 font-semibold text-sm">Rue des Arts, Akwa</p>
                    <p className="text-xs text-slate-500">Douala, Cameroun</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Notification encadrée */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-800 text-sm">
                <Sparkles className="w-4 h-4 fill-amber-600 text-amber-600" /> Cours d'essai gratuit
              </div>
              <p className="text-xs text-amber-900/80 leading-relaxed">
                Votre premier rendez-vous avec l'un de nos professeurs est totalement gratuit et sans engagement. Profitez-en pour tester un instrument !
              </p>
            </div>
          </div>

          {/* Form Column (2/3) */}
          <div className="lg:col-span-2 bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xl shadow-slate-100/50">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
                <MessageSquare className="w-6 h-6 text-amber-500" /> Écrivez-nous
              </h3>
              <p className="text-slate-500 text-sm mt-1">Remplissez ce formulaire et le professeur concerné reviendra vers vous rapidement.</p>
            </div>

            {/* Message d'indisponibilité (Erreur technique) */}
            {isError && (
              <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl flex items-start gap-3 text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-300">
                <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-rose-900">Service indisponible pour l'instant</p>
                  <p className="text-rose-700/90 text-xs mt-0.5">Veuillez réessayer plus tard ou nous contacter directement par téléphone.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Nom complet</label>
                  <Input 
                    type="text" 
                    required
                    placeholder="Ex: Jean Malo" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12 rounded-xl border-slate-200 focus-visible:ring-amber-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Numéro de téléphone</label>
                  <Input 
                    type="tel" 
                    required
                    placeholder="Ex: +237 6xx xx xx xx" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12 rounded-xl border-slate-200 focus-visible:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Adresse Email</label>
                  <Input 
                    type="email" 
                    required
                    placeholder="Ex: jean.malo@gmail.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12 rounded-xl border-slate-200 focus-visible:ring-amber-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Instrument souhaité</label>
                  <select 
                    value={formData.instrument}
                    onChange={(e) => setFormData({...formData, instrument: e.target.value})}
                    className="w-full h-12 px-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  >
                    <option value="Piano">Piano (Elisée)</option>
                    <option value="Guitare">Guitare (Beauclair / André)</option>
                    <option value="Chant">Chant (Mardochée)</option>
                    <option value="Basse">Guitare Basse (Jean Joël)</option>
                    <option value="Autre">Autre demande</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Votre message</label>
                <Textarea 
                  required
                  rows={5}
                  placeholder="Décrivez votre niveau actuel et vos objectifs (ex: apprendre les accords, perfectionner mon chant, préparer une audition...)" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="rounded-xl border-slate-200 focus-visible:ring-amber-500 resize-none"
                />
              </div>

              <Button type="submit" className="w-full h-12 bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold rounded-xl shadow-lg shadow-amber-500/10 gap-2">
                Envoyer ma demande <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
// app/evenements/page.tsx
'use client'

import { useState } from 'react'
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Ticket, 
  Music, 
  Mic, 
  Sparkles,
  ChevronRight,
  Info
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

const eventsData = [
  {
    id: 1,
    title: "Concert de fin d'année",
    description: "Venez applaudir nos élèves lors de leur spectacle de fin d'année. Un moment magique où talents et émotions se rencontrent.",
    date: '15 Juin 2026',
    isoDate: '2026-06-15',
    time: '20h00',
    location: 'Salle Gaveau, Paris 9e',
    price: '15€ - 25€',
    category: 'concert',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop',
    seats: 120,
    remaining: 45,
    program: 'Œuvres de Chopin, Debussy, Beethoven, compositions originales des élèves'
  },
  {
    id: 2,
    title: 'Masterclass de Jazz',
    description: 'Une après-midi exceptionnelle avec le célèbre pianiste de jazz américain Marcus Johnson.',
    date: '22 Mai 2026',
    isoDate: '2026-05-22',
    time: '14h - 17h',
    location: 'Studio MLA, Paris 10e',
    price: '45€',
    category: 'masterclass',
    image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f3f5?w=600&h=400&fit=crop',
    seats: 30,
    remaining: 12,
    program: 'Improvisation, harmonie jazz, technique pianistique, masterclass collective'
  },
  {
    id: 3,
    title: 'Portes ouvertes',
    description: 'Venez découvrir notre école, rencontrer nos professeurs et assister à des cours démonstration gratuits.',
    date: '5 Avril 2026',
    isoDate: '2026-04-05',
    time: '10h - 18h',
    location: 'Music Learn Académique, Paris 8e',
    price: 'Gratuit',
    category: 'openhouse',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    seats: 200,
    remaining: 89,
    program: 'Cours démo, ateliers découverte, rencontres avec les professeurs, audition des élèves'
  },
  {
    id: 4,
    title: 'Concert des professeurs',
    description: 'Nos professeurs vous invitent à un concert exceptionnel mêlant classique, jazz et musiques du monde.',
    date: '10 Mai 2026',
    isoDate: '2026-05-10',
    time: '19h30',
    location: 'Église Saint-Roch, Paris 1er',
    price: '20€',
    category: 'concert',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop',
    seats: 250,
    remaining: 78,
    program: 'Duos piano-violon, ensemble vocal, percussions africaines, jazz trio'
  },
  {
    id: 5,
    title: 'Stage de chant intensif',
    description: 'Un week-end pour travailler votre voix, votre présence scénique et votre interprétation.',
    date: '7-8 Juin 2026',
    isoDate: '2026-06-07',
    time: '10h - 17h',
    location: 'Studio MLA, Paris 10e',
    price: '120€',
    category: 'workshop',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop',
    seats: 15,
    remaining: 8,
    program: 'Technique vocale, interprétation, présence scénique, répétition collective'
  },
  {
    id: 6,
    title: 'Soirée Jam Session',
    description: 'Une soirée ouverte à tous les musiciens pour jouer ensemble dans une ambiance conviviale.',
    date: '28 Mars 2026',
    isoDate: '2026-03-28',
    time: '20h - 23h',
    location: 'Bar Le Sunset, Paris 11e',
    price: '5€ (consommation offerte)',
    category: 'jam',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop',
    seats: 80,
    remaining: 34,
    program: 'Jam session libre, pianos et amplis fournis, bienvenue à tous les instruments'
  }
]

const categories = [
  { value: 'all', label: 'Tous les événements', icon: Calendar },
  { value: 'concert', label: 'Concerts', icon: Music },
  { value: 'masterclass', label: 'Masterclasses', icon: Mic },
  { value: 'workshop', label: 'Stages & Ateliers', icon: Sparkles },
  { value: 'openhouse', label: 'Portes ouvertes', icon: Users },
  { value: 'jam', label: 'Jam Sessions', icon: Music },
]

function getCategoryBadge(category: string) {
  switch (category) {
    case 'concert': return { label: '🎵 Concert', color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' }
    case 'masterclass': return { label: '🎓 Masterclass', color: 'bg-amber-500/10 text-amber-600 border-amber-500/20' }
    case 'workshop': return { label: '🎯 Stage', color: 'bg-purple-500/10 text-purple-600 border-purple-500/20' }
    case 'openhouse': return { label: '🚪 Portes Ouvertes', color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' }
    case 'jam': return { label: '🎸 Jam Session', color: 'bg-rose-500/10 text-rose-600 border-rose-500/20' }
    default: return { label: '📅 Événement', color: 'bg-slate-500/10 text-slate-600 border-slate-500/20' }
  }
}

export default function Evenements() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const now = new Date()

  const filteredEvents = eventsData.filter(event => 
    selectedCategory === 'all' || event.category === selectedCategory
  )

  const upcomingEvents = filteredEvents.filter(event => new Date(event.isoDate) >= now)
  const pastEvents = filteredEvents.filter(event => new Date(event.isoDate) < now)

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-amber-500 text-slate-950 hover:bg-amber-400 mb-6 font-bold uppercase tracking-wider">
              Notre agenda
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Événements & Scènes musicales
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              Concerts, masterclasses, scènes ouvertes... Vivez l'expérience de la musique en direct et partagez des moments uniques avec nos artistes et élèves.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center max-w-4xl mx-auto">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={selectedCategory === cat.value ? 'default' : 'outline'}
              className={`rounded-full px-5 h-10 font-medium text-sm transition-all ${
                selectedCategory === cat.value 
                  ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/10' 
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              <cat.icon className="w-4 h-4 mr-2 shrink-0" />
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Tabs Definition */}
        <Tabs defaultValue="upcoming" className="w-full space-y-10">
          <div className="flex justify-center">
            <TabsList className="bg-slate-200/60 p-1 rounded-xl grid grid-cols-2 w-full max-w-xs border border-slate-200/40">
              <TabsTrigger value="upcoming" className="rounded-lg font-bold text-sm py-2 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">
                À venir
              </TabsTrigger>
              <TabsTrigger value="past" className="rounded-lg font-bold text-sm py-2 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">
                Passés
              </TabsTrigger>
            </TabsList>
          </div>

          {/* UPCOMING EVENTS */}
          <TabsContent value="upcoming" className="outline-none mt-0">
            {upcomingEvents.length === 0 ? (
              <div className="text-center py-16 bg-white border border-dashed border-slate-200 rounded-2xl">
                <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500 font-medium">Aucun événement à venir disponible dans cette catégorie.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => {
                  const badgeInfo = getCategoryBadge(event.category)
                  return (
                    <Dialog key={event.id}>
                      <DialogTrigger asChild>
                        <Card className="group cursor-pointer border-slate-200/80 hover:border-amber-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-white overflow-hidden">
                          <div className="relative h-52 overflow-hidden bg-slate-900">
                            <img 
                              src={event.image} 
                              alt={event.title}
                              className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                            <Badge variant="outline" className={`absolute top-4 left-4 font-bold bg-white/95 backdrop-blur-sm border-0 shadow-sm px-3 py-1 text-xs ${badgeInfo.color.split(' ')[1]}`}>
                              {badgeInfo.label}
                            </Badge>
                          </div>

                          <CardHeader className="p-6 pb-4">
                            <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                              {event.title}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-1.5 text-amber-600 font-semibold text-sm pt-1">
                              <Calendar className="w-4 h-4 shrink-0" />
                              {event.date}
                            </CardDescription>
                          </CardHeader>

                          <CardContent className="p-6 pt-0 pb-4 flex-1 space-y-3">
                            <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-2">
                              {event.description}
                            </p>
                            
                            <div className="space-y-2 border-t border-slate-100 pt-3 text-sm font-medium text-slate-600">
                              <div className="flex items-center gap-2.5">
                                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-2.5">
                                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                                <span className="truncate">{event.location}</span>
                              </div>
                              <div className="flex items-center gap-2.5">
                                <Ticket className="w-4 h-4 text-slate-400 shrink-0" />
                                <span className="text-slate-900 font-semibold">{event.price}</span>
                              </div>
                            </div>
                          </CardContent>
                          
                          <Separator className="bg-slate-100" />

                          <CardFooter className="p-4 bg-slate-50/50 flex items-center justify-between">
                            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-md px-2 py-1">
                              {event.remaining} places restantes
                            </span>
                            <Button variant="ghost" size="sm" className="text-slate-900 font-bold text-xs p-0 group-hover:translate-x-1 transition-transform">
                              DÉTAILS & RÉSERVATION <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </CardFooter>
                        </Card>
                      </DialogTrigger>

                      {/* Modal Content */}
                      <DialogContent className="max-w-2xl sm:rounded-3xl border-0 shadow-2xl p-0 overflow-hidden">
                        <div className="h-48 bg-slate-900 relative">
                          <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-full object-cover opacity-60"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                          <Badge className="absolute top-6 left-6 bg-white text-slate-900 font-bold border-0 shadow-md">
                            {badgeInfo.label}
                          </Badge>
                        </div>

                        <div className="p-8 space-y-6">
                          <div>
                            <h2 className="text-3xl font-bold text-slate-900">{event.title}</h2>
                            <p className="text-slate-500 mt-2 leading-relaxed">{event.description}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 text-sm font-semibold text-slate-700">
                            <div className="flex items-center gap-2.5">
                              <Calendar className="w-4 h-4 text-amber-500" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                              <Clock className="w-4 h-4 text-amber-500" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                              <MapPin className="w-4 h-4 text-amber-500" />
                              <span className="truncate">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                              <Ticket className="w-4 h-4 text-amber-500" />
                              <span className="text-slate-900 font-bold">{event.price}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                              <Info className="w-3.5 h-3.5" /> Au programme
                            </h4>
                            <p className="text-sm text-slate-600 bg-slate-50/50 p-4 rounded-xl border border-slate-100 leading-relaxed italic">
                              "{event.program}"
                            </p>
                          </div>

                          <Separator className="bg-slate-100" />

                          <div className="flex items-center justify-between gap-6 pt-2">
                            <div>
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Disponibilité</span>
                              <div className="text-sm font-medium text-slate-800">
                                <span className="text-xl font-black text-slate-950">{event.remaining}</span> / {event.seats} places libres
                              </div>
                            </div>
                            <Button className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold h-12 px-8 rounded-xl shadow-lg shadow-amber-500/10">
                              Réserver ma place
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )
                })}
              </div>
            )}
          </TabsContent>

          {/* PAST EVENTS */}
          <TabsContent value="past" className="outline-none mt-0">
            {pastEvents.length === 0 ? (
              <div className="text-center py-16 bg-white border border-dashed border-slate-200 rounded-2xl">
                <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500 font-medium">Aucun événement passé répertorié dans cette catégorie.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="bg-white border-slate-200/60 shadow-sm overflow-hidden opacity-75">
                    <div className="relative h-48 overflow-hidden bg-slate-900 grayscale">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover opacity-60"
                      />
                      <Badge variant="secondary" className="absolute top-4 right-4 bg-slate-900/80 text-white border-0 font-semibold text-xs backdrop-blur-sm">
                        Événement terminé
                      </Badge>
                    </div>
                    <CardHeader className="p-6 pb-3">
                      <CardTitle className="text-lg font-bold text-slate-800 line-clamp-1">{event.title}</CardTitle>
                      <CardDescription className="text-slate-400 text-xs font-medium">{event.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
// app/professeurs/page.tsx
'use client'

import { useState } from 'react'
import { 
  Users, 
  Music, 
  Award, 
  GraduationCap,
  Star,
  Mail,
  Phone,
  Clock,
  Search,
  CheckCircle2,
  CalendarDays,
  ExternalLink,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

const teachersData = [
  {
    id: 1,
    name: 'Elisée NGUE ASSALA',
    title: 'Professeur de Piano',
    image: 'https://images.unsplash.com/photo-1552425411-3d14877c3c92?w=400&h=400&fit=crop', // Image d'homme au piano
    specialty: 'Piano classique, gospel & jazz',
    experience: '15 ans',
    students: 15,
    rating: 4.9,
    bio: 'Pianiste émérite et pédagogue passionné, Elisée transmet la maîtrise du clavier avec une approche moderne, mêlant la rigueur classique à la liberté d’improvisation du jazz et du gospel.',
    courses: ['Piano débutant', 'Piano avancé', 'Jazz & Harmonie', 'Accompagnement vocal'],
    diplomas: ['Licence en Musicologie', 'Certificat d’Aptitude Pédagogique', 'Prix d’Excellence Piano'],
    schedule: 'Lun, Mer, Ven - 9h à 18h',
    email: 'elisee.ngue@musiclearnacademy.fr',
    phone: '+237 657 41 54 78'
  },
  {
    id: 2,
    name: 'Beauclair SENI',
    title: 'Professeur de Guitare',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    specialty: 'Guitare électrique & acoustique',
    experience: '9 ans',
    students: 5,
    rating: 4.8,
    bio: 'Guitariste de scène et arrangeur, Beauclair enseigne la guitare à travers une méthode dynamique qui privilégie le plaisir de jouer dès les premiers cours, du rock aux rythmes africains.',
    courses: ['Guitare débutant', 'Guitare Rythmique', 'Solo & Improvisation', 'Styles Modernes'],
    diplomas: ['Diplôme d’Études Musicales (Guitare)', 'Attestation de Formation Professionnelle'],
    schedule: 'Mar, Jeu, Sam - 10h à 20h',
    email: 'beauclair.seni@musiclearnacademy.fr',
    phone: '+237 657 54 15 47'
  },
  {
    id: 3,
    name: 'Mardochée MEFOUNG',
    title: 'Professeur de Chant',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=400&h=400&fit=crop', // Image d'un homme qui chante
    specialty: 'Coaching vocal & techniques de scène',
    experience: '10 ans',
    students: 1,
    rating: 4.9,
    bio: 'Vocaliste polyvalent, Mardochée accompagne les chanteurs de tous niveaux pour libérer leur voix, développer leur puissance respiratoire et renforcer leur confiance sur scène.',
    courses: ['Technique vocale', 'Interprétation & Émotion', 'Chant Pop & Variété', 'Gestion du trac'],
    diplomas: ['Certificat de Formateur Vocal', 'Master en Arts du Spectacle'],
    schedule: 'Mar, Jeu, Sam - 11h à 19h',
    email: 'mardochee.mefoung@musiclearnacademy.fr',
    phone: '+237 657 54 15 47'
  },
  {
    id: 4,
    name: 'Jean Joël EMBOUSSI',
    title: 'Professeur de Guitare Basse',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    specialty: 'Guitare basse (Groove & Rythmique)',
    experience: '8 ans',
    students: 5,
    rating: 4.7,
    bio: 'Bassiste de studio chevronné, Jean Joël met l’accent sur la précision rythmique, le sens du tempo et la connexion indispensable entre la basse et la batterie pour créer un véritable groove.',
    courses: ['Basse initiation', 'Technique de Slap', 'Lignes de Basse & Rythme', 'Basse Jazz/Funk'],
    diplomas: ['Diplôme Supérieur de Musique', 'Spécialisation Musiques Actuelles'],
    schedule: 'Lun, Mer, Jeu - 14h à 21h',
    email: 'jeanjoel.emboussi@musiclearnacademy.fr',
    phone: '+237 675 89 12 34'
  },
  {
    id: 5,
    name: 'André EFONTSE',
    title: 'Professeur de Guitare',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    specialty: 'Guitare classique & folk',
    experience: '7 ans',
    students: 8,
    rating: 4.9,
    bio: 'Spécialiste de la guitare acoustique, André structure ses cours autour de l’apprentissage des accords, de la dextérité des doigts et du déchiffrage rapide pour rendre ses élèves rapidement autonomes.',
    courses: ['Guitare Folk/Accompagnement', 'Picking & Arpèges', 'Théorie musicale appliquée', 'Atelier Groupe'],
    diplomas: ['Certificat d’Enseignement Musical', 'Formation Pédagogie Active'],
    schedule: 'Lun, Mar, Ven - 13h à 21h',
    email: 'andre.efontse@musiclearnacademy.fr',
    phone: '+237 699 12 34 56'
  }
]

export default function Professeurs() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTeachers = teachersData.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-amber-500 text-slate-950 hover:bg-amber-400 mb-6 font-bold uppercase tracking-wider">
              L'excellence pédagogique
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Des professeurs passionnés pour votre progression
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              Tous nos enseignants sont des musiciens actifs, diplômés d'État et sélectionnés pour leur talent autant que pour leur bienveillance.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto -mt-20 mb-16 z-20">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <Input
            placeholder="Rechercher par nom, instrument ou cours..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 h-16 text-lg bg-white shadow-xl border-0 rounded-2xl focus-visible:ring-amber-500 transition-all"
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Users, label: "Professeurs experts", val: "5", color: "text-blue-500" },
            { icon: Award, label: "Expérience moyenne", val: "10 ans", color: "text-amber-500" },
            { icon: GraduationCap, label: "Diplômés d'État", val: "100%", color: "text-emerald-500" },
            { icon: Music, label: "Places disponibles", val: "30", color: "text-rose-500" }
          ].map((stat, i) => (
            <Card key={i} className="border-slate-200/60 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="pt-6 flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-slate-50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 leading-tight">{stat.val}</div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachers.map((teacher) => (
            <Dialog key={teacher.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer border-slate-200/80 hover:border-amber-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-white overflow-hidden">
                  <div className="relative pt-8 px-6 flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-500 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg relative z-10 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    
                    <div className="text-center mt-6 space-y-1">
                      <h3 className="text-xl font-bold text-slate-900">{teacher.name}</h3>
                      <p className="text-amber-600 font-bold text-sm tracking-wide">{teacher.title}</p>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 mt-3 py-1.5 px-3 bg-slate-50 rounded-full border border-slate-100">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold text-slate-700">{teacher.rating}</span>
                      <span className="text-slate-300">|</span>
                      <span className="text-xs font-medium text-slate-500">{teacher.students} élèves formés</span>
                    </div>
                  </div>

                  <CardContent className="px-6 py-6 flex-1">
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 text-center italic">
                      "{teacher.bio}"
                    </p>
                  </CardContent>
                  
                  <Separator className="bg-slate-100" />
                  
                  <div className="px-6 py-4 flex items-center justify-between bg-slate-50/50">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{teacher.experience} Exp.</span>
                    <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700 font-bold text-xs p-0 group-hover:translate-x-1 transition-transform gap-1">
                      VOIR LE PROFIL <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </DialogTrigger>

              {/* Profile Modal */}
              <DialogContent className="max-w-2xl sm:rounded-3xl border-0 shadow-2xl p-0 overflow-hidden">
                <div className="h-32 bg-slate-900 relative">
                  <div className="absolute -bottom-12 left-8">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                </div>

                <div className="pt-16 px-8 pb-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">{teacher.name}</h2>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className="bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100">{teacher.title}</Badge>
                        <Badge variant="outline" className="text-slate-500 border-slate-200">{teacher.experience} d'expérience</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="outline" className="rounded-full border-slate-200 text-slate-600">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full border-slate-200 text-slate-600">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">À propos</h4>
                      <p className="text-slate-600 leading-relaxed">{teacher.bio}</p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                          <Music className="w-3.5 h-3.5 text-amber-500" /> Spécialités
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {teacher.courses.map((course, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-700 border-slate-200">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                          <GraduationCap className="w-3.5 h-3.5 text-amber-500" /> Diplômes
                        </h4>
                        <ul className="space-y-2">
                          {teacher.diplomas.map((diploma, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                              {diploma}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl flex flex-wrap gap-6 border border-slate-100">
                      <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                        <CalendarDays className="w-4 h-4 text-amber-500" />
                        <span>Disponibilités : {teacher.schedule}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button className="flex-1 bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold h-12 rounded-xl shadow-lg shadow-amber-500/10">
                      Réserver un cours d'essai avec {teacher.name.split(' ')[0]}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Empty State */}
        {filteredTeachers.length === 0 && (
          <div className="text-center py-20 bg-white border border-dashed border-slate-200 rounded-3xl mt-12">
            <Users className="w-12 h-12 text-slate-200 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800">Aucun professeur trouvé</h3>
            <p className="text-slate-500 mb-6">Essayez de modifier vos critères de recherche (ex: piano, guitare, chant...).</p>
            <Button variant="outline" onClick={() => setSearchTerm('')} className="rounded-xl">
              Effacer la recherche
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
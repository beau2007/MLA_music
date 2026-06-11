// app/cours/page.tsx
'use client'

import { useState } from 'react'
import { 
  Piano, 
  Guitar, 
  Mic2, 
  Drum, 
  Music4, 
  Headphones, 
  Clock, 
  Users, 
  Star,
  ChevronRight,
  Filter,
  Search,
  Grid,
  List
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const coursesData = [
  {
    id: 1,
    title: 'Piano Classique & Moderne',
    icon: Piano,
    level: 'Débutant à Avancé',
    duration: '30/45/60 min',
    priceText: '35€ - 55€',
    minPrice: 35,
    students: 234,
    rating: 4.9,
    category: 'instrument',
    description: 'Apprenez le piano avec une méthode progressive adaptée à votre niveau. Cours individuels ou collectifs.',
    teacher: 'Marie Dubois',
    schedule: 'Lun-Sam 9h-21h'
  },
  {
    id: 2,
    title: 'Guitare Acoustique & Électrique',
    icon: Guitar,
    level: 'Tous niveaux',
    duration: '30/45/60 min',
    priceText: '35€ - 55€',
    minPrice: 35,
    students: 187,
    rating: 4.8,
    category: 'instrument',
    description: 'Maîtrisez les accords, le fingerpicking et le solfège moderne. Rock, blues, jazz, variété.',
    teacher: 'Thomas Leroy',
    schedule: 'Lun-Sam 10h-20h'
  },
  {
    id: 3,
    title: 'Chant Lyrique & Moderne',
    icon: Mic2,
    level: 'Débutant à Confirmé',
    duration: '45 min',
    priceText: '45€ - 65€',
    minPrice: 45,
    students: 156,
    rating: 4.9,
    category: 'instrument',
    description: 'Travaillez votre voix avec des techniques de respiration et de projection. Préparation aux concours.',
    teacher: 'Sophie Martin',
    schedule: 'Mar-Sam 11h-19h'
  },
  {
    id: 4,
    title: 'Batterie & Percussions',
    icon: Drum,
    level: 'Initiation & Perfectionnement',
    duration: '45/60 min',
    priceText: '40€ - 60€',
    minPrice: 40,
    students: 98,
    rating: 4.7,
    category: 'instrument',
    description: 'Rythme, coordination et indépendance. Cours en studio insonorisé avec batterie acoustique.',
    teacher: 'Nicolas Rousseau',
    schedule: 'Lun-Jeu 14h-21h'
  },
  {
    id: 5,
    title: 'Solfège & Théorie Musicale',
    icon: Music4,
    level: 'Débutant à Avancé',
    duration: '30/45 min',
    priceText: '30€ - 45€',
    minPrice: 30,
    students: 312,
    rating: 4.8,
    category: 'theory',
    description: 'Maîtrisez le langage musical : lecture de notes, rythme, harmonie, analyse.',
    teacher: 'Claire Bernard',
    schedule: 'Lun-Ven 10h-18h'
  },
  {
    id: 6,
    title: 'MAO & Production Musicale',
    icon: Headphones,
    level: 'Intermédiaire à Expert',
    duration: '60/90 min',
    priceText: '50€ - 75€',
    minPrice: 50,
    students: 89,
    rating: 4.9,
    category: 'production',
    description: 'Apprenez à produire, mixer et masteriser avec Ableton Live, Logic Pro et Pro Tools.',
    teacher: 'Antoine Moreau',
    schedule: 'Lun-Ven 13h-21h'
  },
  {
    id: 7,
    title: 'Violon & Musique de Chambre',
    icon: Music4, 
    level: 'Débutant à Avancé',
    duration: '45 min',
    priceText: '45€ - 65€',
    minPrice: 45,
    students: 67,
    rating: 4.8,
    category: 'instrument',
    description: 'Technique d\'archet, justesse et répertoire classique et contemporain.',
    teacher: 'Élise Fontaine',
    schedule: 'Mer-Sam 10h-18h'
  }
]

export default function NosCours() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesPrice = priceRange === 'all' ||
      (priceRange === 'under40' && course.minPrice < 40) ||
      (priceRange === '40-60' && course.minPrice >= 40 && course.minPrice <= 60) ||
      (priceRange === 'over60' && course.minPrice > 60)

    return matchesCategory && matchesSearch && matchesPrice
  })

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-amber-500 text-slate-950 hover:bg-amber-400 mb-4 font-semibold px-3 py-1">
              Formations & Ateliers
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Découvrez nos cours de musique
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-normal leading-relaxed">
              Des programmes personnalisés adaptés à tous les âges et tous les niveaux, dispensés au cœur de notre académie par des professeurs diplômés et passionnés.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar Filtres */}
          <aside className="lg:col-span-1">
            <Card className="shadow-sm border-slate-200/80 sticky top-6">
              <CardHeader className="border-b border-slate-100 pb-4">
                <CardTitle className="flex items-center gap-2 text-lg font-bold text-slate-800">
                  <Filter className="w-4 h-4 text-amber-500" />
                  Ajuster la sélection
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 pt-5">
                {/* Recherche textuelle */}
                <div className="space-y-2">
                  <Label htmlFor="search" className="text-xs font-bold uppercase tracking-wider text-slate-500">Recherche</Label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                      id="search"
                      placeholder="Piano, guitare, rock..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 bg-slate-50/50 border-slate-200 focus-visible:ring-amber-500"
                    />
                  </div>
                </div>

                {/* Filtrage par catégorie */}
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">Catégorie</Label>
                  <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory} className="gap-2.5">
                    <div className="flex items-center space-x-2.5 cursor-pointer">
                      <RadioGroupItem value="all" id="all" className="text-amber-500 focus-visible:ring-amber-500" />
                      <Label htmlFor="all" className="text-sm font-medium text-slate-700 cursor-pointer">Tous les cours</Label>
                    </div>
                    <div className="flex items-center space-x-2.5 cursor-pointer">
                      <RadioGroupItem value="instrument" id="instrument" className="text-amber-500 focus-visible:ring-amber-500" />
                      <Label htmlFor="instrument" className="text-sm font-medium text-slate-700 cursor-pointer">Instruments</Label>
                    </div>
                    <div className="flex items-center space-x-2.5 cursor-pointer">
                      <RadioGroupItem value="theory" id="theory" className="text-amber-500 focus-visible:ring-amber-500" />
                      <Label htmlFor="theory" className="text-sm font-medium text-slate-700 cursor-pointer">Théorie & Solfège</Label>
                    </div>
                    <div className="flex items-center space-x-2.5 cursor-pointer">
                      <RadioGroupItem value="production" id="production" className="text-amber-500 focus-visible:ring-amber-500" />
                      <Label htmlFor="production" className="text-sm font-medium text-slate-700 cursor-pointer">MAO & Production</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Filtrage par budget */}
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">Budget moyen</Label>
                  <RadioGroup value={priceRange} onValueChange={setPriceRange} className="gap-2.5">
                    <div className="flex items-center space-x-2.5 cursor-pointer">
                      <RadioGroupItem value="all" id="priceAll" className="text-amber-500 focus-visible:ring-amber-500" />
                      <Label htmlFor="priceAll" className="text-sm font-medium text-slate-700 cursor-pointer">Tous les tarifs</Label>
                    </div>
                    <div className="flex items-center space-x-2.5 cursor-pointer">
                      <RadioGroupItem value="under40" id="under40" className="text-amber-500 focus-visible:ring-amber-500" />
                      <Label htmlFor="under40" className="text-sm font-medium text-slate-700 cursor-pointer">Moins de 40€ / cours</Label>
                    </div>
                    <div className="flex items-center space-x-2.5 cursor-pointer">
                      <RadioGroupItem value="40-60" id="40-60" className="text-amber-500 focus-visible:ring-amber-500" />
                      <Label htmlFor="40-60" className="text-sm font-medium text-slate-700 cursor-pointer">Entre 40€ et 60€</Label>
                    </div>
                    <div className="flex items-center space-x-2.5 cursor-pointer">
                      <RadioGroupItem value="over60" id="over60" className="text-amber-500 focus-visible:ring-amber-500" />
                      <Label htmlFor="over60" className="text-sm font-medium text-slate-700 cursor-pointer">Plus de 60€</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Accordéon Informations */}
                <Accordion type="single" collapsible className="w-full pt-2">
                  <AccordionItem value="infos" className="border-b-0">
                    <AccordionTrigger className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:no-underline py-2">
                      Informations Pratiques
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-1.5">✓ <span className="mt-0.5">Cours à l'unité ou formules trimestrielles</span></li>
                        <li className="flex items-start gap-1.5">✓ <span className="mt-0.5">Séance d'essai sans engagement</span></li>
                        <li className="flex items-start gap-1.5">✓ <span className="mt-0.5">Salles d'études insonorisées et équipées</span></li>
                        <li className="flex items-start gap-1.5">✓ <span className="mt-0.5">Prêt d'instrument possible sur place</span></li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </aside>

          {/* Liste/Grille des cours */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Top Bar Résultats & Sélecteur de vue */}
            <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
              <p className="text-sm font-medium text-slate-600 pl-2">
                <span className="font-bold text-slate-900">{filteredCourses.length}</span> {filteredCourses.length > 1 ? 'cours trouvés' : 'cours trouvé'}
              </p>
              <Tabs value={viewMode} onValueChange={setViewMode}>
                <TabsList className="bg-slate-100 p-1">
                  <TabsTrigger value="grid" className="data-[state=active]:bg-white px-3 py-1">
                    <Grid className="w-4 h-4 mr-1.5" /> Grille
                  </TabsTrigger>
                  <TabsTrigger value="list" className="data-[state=active]:bg-white px-3 py-1">
                    <List className="w-4 h-4 mr-1.5" /> Liste
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Grille dynamique ou Liste adaptative */}
            <div className={viewMode === 'grid' ? "grid md:grid-cols-2 gap-6" : "space-y-4"}>
              {filteredCourses.map((course) => {
                const IconComponent = course.icon;
                return (
                  <Card 
                    key={course.id} 
                    className={`group border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col ${
                      viewMode === 'list' ? 'md:flex-row md:items-center' : ''
                    }`}
                  >
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3.5">
                            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center group-hover:bg-amber-500/20 transition-colors shrink-0">
                              <IconComponent className="w-5 h-5 text-amber-600" />
                            </div>
                            <div>
                              <CardTitle className="text-xl font-bold text-slate-900 tracking-tight">{course.title}</CardTitle>
                              <CardDescription className="text-slate-500 font-medium mt-0.5">{course.teacher}</CardDescription>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 shrink-0 bg-slate-50 border border-slate-100 px-2 py-1 rounded-lg">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span className="text-xs font-bold text-slate-700">{course.rating}</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pb-4">
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{course.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="gap-1 bg-slate-100 text-slate-700 font-medium hover:bg-slate-100">
                            <Clock className="w-3 h-3 text-slate-500" /> {course.duration}
                          </Badge>
                          <Badge variant="secondary" className="gap-1 bg-slate-100 text-slate-700 font-medium hover:bg-slate-100">
                            <Users className="w-3 h-3 text-slate-500" /> {course.students} élèves
                          </Badge>
                          <Badge variant="outline" className="border-slate-200 text-slate-600">
                            {course.level}
                          </Badge>
                        </div>
                        
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-black text-slate-900">{course.priceText}</span>
                            <span className="text-xs font-semibold text-slate-500"> / heure</span>
                          </div>
                          <span className="text-xs font-mono text-slate-500 bg-slate-100/60 border border-slate-200/40 px-2 py-0.5 rounded">
                            {course.schedule}
                          </span>
                        </div>
                      </CardContent>
                    </div>

                    <CardFooter className={`pt-0 ${viewMode === 'list' ? 'md:pt-6 md:pb-6 md:pr-6 md:pl-0 border-t-0' : ''}`}>
                      <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 font-medium shadow-sm transition-colors">
                        S'inscrire au cours
                        <ChevronRight className="w-4 h-4 ml-1.5" />
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>

            {/* Aucun résultat */}
            {filteredCourses.length === 0 && (
              <div className="text-center py-20 bg-white border border-dashed border-slate-300 rounded-2xl">
                <Music4 className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800 mb-1">Aucun cours trouvé</h3>
                <p className="text-sm text-slate-500 max-w-sm mx-auto">
                  Ajustez vos filtres de recherche ou changez de catégorie pour découvrir d'autres disciplines.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 border-slate-200"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
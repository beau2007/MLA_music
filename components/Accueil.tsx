// app/page.tsx
'use client'

import Link from 'next/link' // Import de Link pour la navigation Next.js
import { 
  Music, 
  GraduationCap, 
  Users, 
  CalendarDays, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Award,
  Sparkles,
  Layers,
  Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50/50 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        {/* Background Grids & Blurs */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <Badge className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold uppercase tracking-wider px-3 py-1">
                ✨ Rentrée 2026 : Inscriptions ouvertes
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Révélez le musicien <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
                  qui est en vous
                </span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Que vous soyez grand débutant ou musicien confirmé, apprenez le piano, la guitare, le chant ou la MAO à votre rythme avec des professeurs diplômés et passionnés.
              </p>
              
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Play className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">
                  Découvrez notre bande-annonce
                </p>
                <p className="text-sm text-slate-400">
                  Plongez dans l'univers de Music Learn Académique
                </p>
              </div>
            </div>
                <Button asChild variant="outline" className="bg-amber-600 border-slate-700 text-white hover:bg-slate-400 h-14 px-8 text-base rounded-xl gap-2">
                  <Link href="/presentation">
                    <Play className="w-4 h-4 fill-white" /> Découvrir l'école
                  </Link>
                </Button>
          </div>
        </div>

              {/* Trust Badge */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Tous âges & niveaux</span>
                </div>
              </div>
            </div>

            {/* Right Image Layout */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-3xl rotate-3 scale-105 opacity-10" />
                <img 
                  src="https://media.istockphoto.com/id/1337652676/photo/musical-education-happy-black-girl-playing-the-piano.jpg?s=612x612&w=0&k=20&c=7XCXDv9HgUciaefvw7oLNo9DS5RXK_wEQwo8gsfvPoc=" 
                  alt="Music School Experience" 
                  className="rounded-3xl shadow-2xl border border-slate-800 object-cover relative z-10 w-full h-[500px]"
                />
                
                {/* Floating Micro-Card */}
                <div className="absolute -bottom-6 -left-10 bg-white shadow-xl rounded-2xl p-4 border border-slate-100 z-20 flex items-center gap-3 animate-bounce-slow">
                  <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-600">
                    <Star className="w-5 h-5 fill-amber-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">disponibilité</div>
                    <p className="text-xs font-medium text-slate-500">selon votre programme</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-white border-y border-slate-200/60 py-8 relative z-20 -mt-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "30", label: "Places disponibles", icon: Users, color: "text-blue-500" },
              { val: "5", label: "Professeurs experts", icon: GraduationCap, color: "text-amber-500" },
              { val: "6", label: "Disciplines au choix", icon: Music, color: "text-purple-500" },
              { val: "1er", label: "Cours d'essai offert", icon: CalendarDays, color: "text-emerald-500" }
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight flex items-center justify-center gap-1">
                  <span className={stat.color}>{stat.val}</span>
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DISCIPLINES / INSTRUMENTS */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <Badge variant="outline" className="border-amber-200 text-amber-700 bg-amber-50 font-bold uppercase tracking-wide">
              Nos Formations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Choisissez votre instrument
            </h2>
            <p className="text-slate-500">
              Des cursus sur-mesure dispensés en cours individuels pour apprendre ce que vous aimez vraiment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Piano classique & Jazz", desc: "Apprenez la rigueur des grands classiques ou la liberté de l'improvisation jazz.", img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=250&fit=crop", count: "4 professeurs", slug: "piano" },
              { title: "Guitare & Basse", desc: "Électrique, acoustique ou folk. Maîtrisez les accords, les riffs et les solos de vos morceaux favoris.", img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=250&fit=crop", count: "4 professeurs", slug: "guitare" },
              { title: "Chant & Coaching Vocal", desc: "Trouvez votre voix, maîtrisez votre souffle et gagnez en aisance scénique.", img: "https://images.squarespace-cdn.com/content/v1/601e88f1beed354b4e2f0a42/ede80e86-0c3b-43d0-829e-964b4cb28094/2.png?format=1500w", count: "1 professeur", slug: "chant" },
              { title: "Violon & flûte", desc: "Développez votre sens du rythme, votre coordination et votre groove.", img: "https://ecoledemusiquejocelynelaberge.com/wp-content/uploads/2014/09/cme-flute-02.jpg", count: "2 professeurs", slug: "violon-flute" },
              { title: "Production & MAO", desc: "Composez, enregistrez et mixez vos propres productions sur Ableton ou Logic Pro.", img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=250&fit=crop", count: "2 professeurs", slug: "mao" },
              { title: "Éveil Musical", desc: "Des ateliers ludiques adaptés pour initier les plus petits (4-6 ans) à la magie des sons.", img: "https://th.bing.com/th/id/R.4c6cc9519159fa6a7cb927ecc2272e5b?rik=XYb0Jwb8UqO9bA&riu=http%3a%2f%2fdrop.philharmoniedeparis.fr%2fcontent%2fGPM%2f01AppEI%2fillustration-%c3%a9veil-musical.jpg&ehk=RhvqsQbRqCnRgp8YFiiesxO5jugRaRHBLvh7%2fFa7cVw%3d&risl=&pid=ImgRaw&r=0", count: "2 animateurs", slug: "eveil-musical" },
            ].map((inst, index) => (
              <Card key={index} className="group border-slate-200/80 hover:border-amber-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-white overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img 
                    src={inst.img} 
                    alt={inst.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="p-6 pb-2">
                  <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">{inst.count}</div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {inst.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-1">
                  <p className="text-slate-500 text-sm leading-relaxed">{inst.desc}</p>
                </CardContent>
                <Separator className="bg-slate-100" />
                <div className="px-6 py-4 bg-slate-50/50 flex justify-end">
                  {/* Redirection dynamique vers la page spécifique de la formation */}
                  <Button asChild variant="ghost" size="sm" className="text-slate-900 font-bold text-xs p-0 gap-1 group-hover:translate-x-1 transition-transform">
                    <Link href={`/formations/${inst.slug}`}>
                      EN SAVOIR PLUS <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY US / VALUES */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:40px_40px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <Badge className="bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold uppercase tracking-wide">
                La méthode MLA
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Une pédagogie axée sur le plaisir de jouer
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Fini le solfège rébarbatif pendant des années avant de toucher à l'instrument. Chez nous, la théorie s'apprend par la pratique immédiate sur les morceaux que vous choisissez.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  { title: "Horaires flexibles", desc: "Cours du lundi au samedi, de 9h à 22h, adaptés à votre emploi du temps." },
                  { title: "Professeurs certifiés", desc: "Sélectionnés pour leur parcours académique d'excellence et leur bienveillance." },
                  { title: "Pratique de la scène", desc: "Deux grands concerts organisés chaque année dans de vraies salles parisiennes." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="p-1 h-6 w-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base">{item.title}</h4>
                      <p className="text-slate-400 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column / Cards Feature */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Award, t: "Enseignement d'excellence", d: "100% de nos enseignants sont diplômés des plus grands conservatoires nationaux.", c: "border-slate-800 bg-slate-950/40" },
                { icon: Sparkles, t: "Studios tout équipés", d: "Des pianos acoustiques d'exception, amplis haut de gamme et cabines insonorisées.", c: "border-amber-500/30 bg-slate-950/80 shadow-xl shadow-amber-500/5" },
                { icon: Layers, t: "Cursus personnalisés", d: "Classique, Pop, Rock, Métal, Variété... Notre programme s'ajuste à vos goûts musicaux.", c: "border-slate-800 bg-slate-950/40" },
                { icon: Heart, t: "Esprit communautaire", d: "Jam sessions mensuelles et ateliers de groupe gratuits pour échanger et jouer ensemble.", c: "border-slate-800 bg-slate-950/40" }
              ].map((feat, idx) => (
                <Card key={idx} className={`border p-6 rounded-2xl ${feat.c}`}>
                  <div className="p-3 bg-slate-800 rounded-xl text-amber-500 inline-block mb-4">
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-lg font-bold text-white">{feat.t}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-slate-400 text-sm leading-relaxed">{feat.d}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50 font-bold uppercase tracking-wide">
              Avis des élèves
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Ils partagent leur expérience
            </h2>
            <p className="text-slate-500">
              Découvrez les retours d'expérience de notre communauté de passionnés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Julien R.", role: "Élève en piano (adulte)", text: "J'ai commencé le piano à 35 ans en partant de zéro. Grâce à l'approche très axée sur le plaisir de ma professeure, je joue mes morceaux préférés de pop après seulement 6 mois !", rate: 5 },
              { name: "Camille & Lucas", role: "Parents de Sofia (8 ans)", text: "Notre fille adore ses cours d'éveil puis de batterie. L'ambiance est dynamique, les professeurs ont une patience d'or et transmettent une vraie passion ludique.", rate: 5 },
              { name: "Mélanie D.", role: "Élève en Chant & Guitare", text: "Les locaux sont superbes et le fait de pouvoir participer aux jam sessions et concerts de fin d'année apporte une confiance en soi incroyable. Je recommande les yeux fermés !", rate: 5 }
            ].map((t, i) => (
              <Card key={i} className="border-slate-200/60 shadow-sm p-6 bg-slate-50/50 rounded-2xl flex flex-col justify-between h-full">
                <CardContent className="p-0 space-y-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(t.rate)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{t.text}"
                  </p>
                </CardContent>
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 font-bold text-slate-700 flex items-center justify-center text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs font-medium text-slate-400">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="py-16 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Prêt à commencer l'aventure ?
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                Profitez d'un premier cours de découverte de 30 minutes entièrement gratuit et sans engagement pour rencontrer votre futur professeur.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                {/* Bouton CTA Principal vers l'inscription */}
                <Button asChild className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold h-14 px-8 rounded-xl text-base shadow-lg shadow-amber-500/10">
                  <Link href="/contact">
                    S'inscrire au cours d'essai gratuit
                  </Link>
                </Button>
                
                {/* Bouton de contact secondaire */}
                <Button asChild variant="outline" className="bg-transparent border-slate-700 text-white hover:bg-slate-800 h-14 px-8 rounded-xl text-base">
                  <Link href="/contact">
                    Nous contacter
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
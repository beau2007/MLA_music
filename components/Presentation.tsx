// app/presentation/page.tsx
'use client'

import { useState, useRef } from 'react'
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize,
  Clock,
  Users,
  Star,
  Music,
  ChevronRight,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export default function PresentationPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Vidéo de présentation (exemple depuis Pexels - musique/concert)
  const videoUrl = 'https://player.vimeo.com/external/381689807.hd.mp4?s=89c416a16917880f7b5f5e3c1958e470b8029b0a&profile_id=175'

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
      setShowOverlay(false)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen()
        setIsFullscreen(true)
      } else {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(progress)
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    setProgress(0)
    setShowOverlay(true)
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = x / rect.width
      videoRef.current.currentTime = percentage * videoRef.current.duration
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-charcoal to-soft-black">
      {/* En-tête de la page */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent" />
        <div className="container-custom relative">
          <Badge className="bg-gold text-deep-charcoal mb-4">
            <Music className="w-4 h-4 mr-2" />
            Bande-annonce officielle
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Découvrez <span className="text-gold">Music Learn Académique</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Plongez au cœur de notre école et laissez-vous inspirer par la passion de la musique.
          </p>
        </div>
      </section>

      {/* Lecteur vidéo */}
      <div className="container-custom pb-16">
        <div 
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/90 group"
          style={{ aspectRatio: '16/9' }}
        >
          {/* Vidéo */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=675&fit=crop"
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnd}
            onClick={togglePlay}
          >
            <source src={videoUrl} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>

          {/* Overlay de lecture */}
          {showOverlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 via-transparent to-deep-charcoal/30 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/20 rounded-full animate-ping" />
                  <Button
                    onClick={togglePlay}
                    className="w-24 h-24 rounded-full bg-gold hover:bg-gold-dark text-deep-charcoal text-2xl transition-all duration-300 hover:scale-110 relative z-10"
                  >
                    <Play className="w-12 h-12 ml-2" />
                  </Button>
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-white">
                    Regarder la bande-annonce
                  </h2>
                  <p className="text-white/60 text-sm mt-2">2 min 30 de pure émotion musicale</p>
                </div>
              </div>
            </div>
          )}

          {/* Contrôles de la vidéo */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Barre de progression */}
            <div 
              className="w-full h-1 bg-white/20 rounded-full cursor-pointer mb-3"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-gold rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>
                <span className="text-white/80 text-sm">
                  {videoRef.current ? formatTime(videoRef.current.currentTime) : '00:00'} / 
                  {videoRef.current ? formatTime(videoRef.current.duration) : '00:00'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={toggleFullscreen}
                >
                  {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Informations sur la vidéo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Durée</p>
                <p className="text-white font-semibold">2 min 30</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Vues</p>
                <p className="text-white font-semibold">1.2k+</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Note</p>
                <p className="text-white font-semibold">4.9 / 5</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section "À propos de la vidéo" */}
      <section className="py-12 bg-deep-charcoal/50 border-t border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">
                Une immersion dans <span className="text-gold">l'excellence musicale</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Cette bande-annonce vous plonge au cœur de Music Learn Académique. Découvrez nos professeurs passionnés, 
                nos salles de cours modernes et l'atmosphère unique qui règne dans notre école.
              </p>
              <p className="text-white/70 leading-relaxed">
                Depuis 2008, nous formons des musiciens de talent dans une ambiance bienveillante et professionnelle. 
                Rejoignez une communauté de 1500+ élèves qui ont déjà fait confiance à notre méthode.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge variant="outline" className="border-gold/30 text-gold">
                  🎵 Cours instrumentaux
                </Badge>
                <Badge variant="outline" className="border-gold/30 text-gold">
                  🎤 Chant & solfège
                </Badge>
                <Badge variant="outline" className="border-gold/30 text-gold">
                  🎧 MAO & production
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=300&fit=crop"
                  alt="Cours de piano"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Cours de piano</p>
              </div>
              <div className="relative rounded-xl overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop"
                  alt="Concert"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Concert des élèves</p>
              </div>
              <div className="relative rounded-xl overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=300&fit=crop"
                  alt="Guitare"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Cours de guitare</p>
              </div>
              <div className="relative rounded-xl overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop"
                  alt="Chant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Ateliers chant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Prêt à commencer votre <span className="text-gold">voyage musical</span> ?
            </h3>
            <p className="text-white/60 mb-6">
              Profitez d'un cours d'essai gratuit et découvrez notre méthode unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold text-deep-charcoal hover:bg-gold-dark">
                Réserver mon cours d'essai
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Voir tous nos cours
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Fonction utilitaire pour formater le temps
function formatTime(seconds: number): string {
  if (!seconds || isNaN(seconds)) return '00:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}
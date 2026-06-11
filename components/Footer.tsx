// components/layout/Footer.tsx
import Link from 'next/link'
import { Mail, Phone, MapPin, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-14 border-t border-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-md shadow-amber-500/10">
                <Music className="text-slate-950 w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1.5 leading-tight">
                <span className="text-xl font-black text-white tracking-tight">Music Learn</span>
                <span className="text-amber-500 font-extrabold text-sm sm:text-xl tracking-tight">Academy</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Une nouvelle approche de l'enseignement musical axée sur le plaisir de jouer, le partage et l'accompagnement personnalisé.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Liens rapides</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Accueil</Link></li>
              <li><Link href="/nos-cours" className="hover:text-amber-400 transition-colors">Nos cours</Link></li>
              <li><Link href="/nos-professeurs" className="hover:text-amber-400 transition-colors">Professeurs</Link></li>
              <li><Link href="/evenements" className="hover:text-amber-400 transition-colors">Événements</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" />
                <span>Yaoundé, Cameroun (Biyem assi acassia)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+237657907087 - +237657541547</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="truncate">contact@musiclearnacademy.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Music className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="truncate">musiclearnacademy</span>
              </li>
            </ul>
          </div>

   {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-3">Recevez nos actualités et offres spéciales</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white placeholder:text-white/50"
              />
              <button className="bg-gold text-deep-charcoal font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:bg-gold-dark">
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Music Learn Académique. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
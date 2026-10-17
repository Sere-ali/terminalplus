import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, BookOpenCheck, Bot, GraduationCap, Smartphone, Wallet, UserPlus, Rocket } from 'lucide-react'
import { useApi } from '@/lib/api'
import type { SubjectCard } from '@/lib/types'
import { SiteHeader } from '@/components/site-header'
import { InstallButton } from '@/components/install-app'
import { SERIE_LABEL, SERIE_TAGLINE, useMe, type Serie } from '@/lib/use-me'

export const Route = createFileRoute('/')({ component: Home })

function PhoneMock() {
  return (
    <div className="float relative mx-auto w-[17.5rem] sm:w-[19rem]" aria-hidden>
      <div className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(255,130,0,.35),transparent)] blur-2xl" />
      <div className="rounded-[2.6rem] border-[7px] border-[#0b1f17] bg-[#0b1f17] shadow-[0_40px_80px_-20px_rgba(0,0,0,.7)]">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-[#f4f8f5] text-[#0b1f17]">
          <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-[#0b1f17]" />
          <div className="px-4 pb-4 pt-3">
            <p className="text-[11px] font-semibold text-primary">Terminale D · Mathématiques</p>
            <p className="font-[family-name:var(--font-display)] text-lg font-bold leading-tight">La dérivation</p>
            <div className="mt-2 rounded-xl bg-white p-3 text-[12px] shadow-sm">
              <p className="font-semibold text-primary">À retenir</p>
              <p className="mt-1 font-mono text-[13px]">f(x) = x² &nbsp;→&nbsp; f′(x) = 2x</p>
            </div>
            <div className="mt-3 space-y-2 text-[12px] leading-snug">
              <div className="bubble ml-auto w-[82%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-white" style={{ ['--d' as string]: 1600 }}>
                Je n'ai pas compris le nombre dérivé 😅
              </div>
              <div className="bubble w-[90%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm" style={{ ['--d' as string]: 2900 }}>
                <span className="font-bold text-brand-orange">Professeur</span><br />
                Pas de souci ! C'est la <b>vitesse</b> d'une moto à un instant précis. On le calcule ensemble ?
              </div>
              <div className="bubble inline-flex rounded-2xl rounded-bl-sm bg-white px-3 py-2.5 text-primary shadow-sm dots" style={{ ['--d' as string]: 4300 }}>
                <span /><span /><span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Home() {
  const me = useMe()
  const [serie, setSerie] = useState<Serie>('D')
  const subjects = useApi<SubjectCard[]>(`/api/subjects?serie=${serie}`)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="hero-night">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 lg:grid-cols-[1.15fr_.85fr] lg:pb-24 lg:pt-20">
          <div className="text-center lg:text-left">
            <p className="rise inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-semibold text-white/90" style={{ ['--d' as string]: 50 }}>
              <span className="size-2 rounded-full bg-brand-orange" /> Terminales A, C et D · Côte d'Ivoire
            </p>
            <h1 className="rise mx-auto mt-5 max-w-2xl font-[family-name:var(--font-display)] text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:mx-0" style={{ ['--d' as string]: 180 }}>
              Ton BAC se prépare ici, leçon après leçon.
            </h1>
            <p className="rise mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0" style={{ ['--d' as string]: 320 }}>
              Des cours clairs pour toutes tes matières, et un professeur virtuel qui répond à tes questions de jour comme de nuit.
            </p>
            <p className="rise mt-5 text-sm font-semibold text-white/90" style={{ ['--d' as string]: 420 }}>
              Accès à tous les cours : <span className="rounded-md bg-brand-orange px-2 py-0.5 text-white">1 000 F CFA</span> une seule fois, par Wave
            </p>
            <div className="rise mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start" style={{ ['--d' as string]: 540 }}>
              <InstallButton />
              {me.status === 'ready' ? (
                <Link to="/tableau" className="group flex items-center justify-center gap-2 rounded-2xl glass px-7 py-4 text-base font-bold transition hover:bg-white/15 active:scale-[0.98]">
                  Continuer mes cours <ArrowRight className="size-5 transition group-hover:translate-x-1" />
                </Link>
              ) : (
                <Link to="/connexion" search={{ mode: 'signup' }} className="group flex items-center justify-center gap-2 rounded-2xl glass px-7 py-4 text-base font-bold transition hover:bg-white/15 active:scale-[0.98]">
                  Créer mon compte <ArrowRight className="size-5 transition group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </div>
          <div className="rise" style={{ ['--d' as string]: 400 }}>
            <PhoneMock />
          </div>
        </div>
        <div className="tricolor" />
      </section>

      <section id="matieres" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">Choisis ta série</h2>
        <div className="mx-auto mt-7 grid max-w-md grid-cols-3 gap-1.5 rounded-2xl border bg-card p-1.5 shadow-sm">
          {(['A', 'C', 'D'] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSerie(s)}
              className={`rounded-xl px-3 py-3 text-sm font-bold transition active:scale-95 ${serie === s ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:bg-secondary'}`}
            >
              {SERIE_LABEL[s]}
            </button>
          ))}
        </div>
        <p className="mt-3 text-center text-sm text-muted-foreground">{SERIE_TAGLINE[serie]}</p>

        <div key={serie} className="stagger mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects === undefined && [0, 1, 2].map((i) => <div key={i} className="h-32 animate-pulse rounded-3xl bg-secondary" />)}
          {subjects?.map((s) => (
            <div key={s.slug} className="lift rounded-3xl border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-green-soft text-3xl" aria-hidden>{s.emoji}</span>
                <div>
                  <h3 className="text-lg font-bold leading-tight">{s.name}</h3>
                  <p className="text-xs font-medium text-primary">
                    {s.published} leçon{s.published > 1 ? 's' : ''} disponible{s.published > 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#05301f] text-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">Commence en trois étapes</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: UserPlus, t: 'Crée ton compte', d: 'Un identifiant, un mot de passe, ta série. Ça prend une minute.' },
              { icon: Wallet, t: 'Paie 1 000 F par Wave', d: 'Envoie le montant, recopie la référence reçue par SMS. Ton accès est validé rapidement.' },
              { icon: Rocket, t: 'Révise à ton rythme', d: 'Tous les cours de ta série, et ton professeur virtuel à chaque leçon.' },
            ].map(({ icon: Icon, t, d }, i) => (
              <li key={t} className="lift glass rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-orange text-white"><Icon className="size-6" /></span>
                  <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-white/30">{i + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/70">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BookOpenCheck, t: 'Suit le programme', d: 'Chapitres organisés selon les programmes éducatifs de Côte d\'Ivoire.' },
            { icon: GraduationCap, t: 'Expliqué simplement', d: 'Définitions, exemples corrigés, pièges à éviter et points à retenir pour le BAC.' },
            { icon: Bot, t: 'Professeur virtuel', d: "Pose ta question sur n'importe quelle leçon et reçois une explication pas à pas." },
            { icon: Smartphone, t: 'Pensé pour ton téléphone', d: 'Léger et lisible sur smartphone, même avec une connexion limitée.' },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="lift rounded-3xl border bg-card p-5">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-orange-soft text-brand-orange"><Icon className="size-5" /></span>
              <h3 className="mt-3 font-bold">{t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-primary p-7 text-center text-primary-foreground sm:p-10">
          <img src="/icon-192.png" alt="" className="mx-auto size-16 rounded-2xl shadow-xl" />
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold sm:text-3xl">Garde TERMINALE+ sur ton écran d'accueil</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/75">Une icône, un clic, et tes cours s'ouvrent comme une vraie application. Gratuit, sans Play Store ni App Store.</p>
          <div className="mt-6 flex justify-center"><InstallButton /></div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} TERMINALE+ · Plateforme d'accompagnement scolaire · Côte d'Ivoire
      </footer>
    </div>
  )
}

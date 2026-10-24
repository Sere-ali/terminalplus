import { Link } from '@tanstack/react-router'

/** Bandeau affiché aux élèves qui n'ont pas encore payé : ils testent les leçons gratuites, puis débloquent le reste. */
export function UnlockBanner({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-brand-orange bg-brand-orange-soft p-4 ${className}`}>
      <p className="font-bold">🎁 Tu testes gratuitement</p>
      <p className="mt-1 text-sm">
        Une leçon gratuite par matière pour juger la qualité des cours. Pour débloquer toutes les leçons, le professeur
        virtuel et les sujets du BAC : 1 100 F par Wave.
      </p>
      <Link to="/paiement" className="mt-3 inline-block rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
        Débloquer tous les cours
      </Link>
    </div>
  )
}

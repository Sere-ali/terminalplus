import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { Eye, EyeOff } from 'lucide-react'
import 'katex/dist/katex.min.css'

/** Les grands nombres (ex. 1 250 000) ne doivent jamais être coupés en fin de ligne. */
const keepNumbers = (t: string) => t.replace(/(\d) (?=\d{3}(?!\d))/g, '$1\u00a0')

function Md({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
      {keepNumbers(children)}
    </ReactMarkdown>
  )
}

/** Corrigé masqué par défaut : l'élève cherche d'abord, puis vérifie. */
function Corrige({ children }: { children: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="not-prose my-4">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex items-center gap-2 rounded-xl border border-brand-orange/40 bg-brand-orange-soft px-4 py-2.5 text-sm font-bold text-brand-orange transition active:scale-95"
      >
        {open ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        {open ? 'Cacher le corrigé' : 'Voir le corrigé'}
      </button>
      {open && (
        <div className="lesson prose prose-neutral page-in mt-3 max-w-none rounded-2xl border-l-4 border-brand-orange bg-card p-4 prose-p:leading-relaxed prose-li:my-0.5">
          <Md>{children}</Md>
        </div>
      )}
    </div>
  )
}

export function Markdown({ children, className = '' }: { children: string; className?: string }) {
  // Les blocs :::corrige ... ::: deviennent des corrigés repliables.
  const parts = children.split(/^:::corrige[^\n]*\n([\s\S]*?)^:::[ \t]*$/gm)
  return (
    <div className={`lesson prose prose-neutral max-w-none prose-p:leading-relaxed prose-li:my-0.5 prose-strong:text-foreground ${className}`}>
      {parts.map((part, i) =>
        i % 2 === 1 ? <Corrige key={i}>{part}</Corrige> : part.trim() ? <Md key={i}>{part}</Md> : null,
      )}
    </div>
  )
}

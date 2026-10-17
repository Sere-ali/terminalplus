import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

export function Markdown({ children, className = '' }: { children: string; className?: string }) {
  return (
    <div className={`lesson prose prose-neutral max-w-none prose-p:leading-relaxed prose-li:my-0.5 prose-strong:text-foreground ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
        {children}
      </ReactMarkdown>
    </div>
  )
}

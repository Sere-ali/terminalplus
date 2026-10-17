import type { Serie } from '@/lib/use-me'

export type SubjectCard = {
  slug: string
  name: string
  emoji: string
  description: string
  total: number
  published: number
}

export type ProgressRow = { chapterSlug: string; done: boolean; favorite: boolean }

export type ChapterListItem = {
  slug: string
  title: string
  theme: string
  order: number
  status: 'published' | 'draft'
}

export type ChapterListResponse = {
  subject: { slug: string; name: string; emoji: string; serie: Serie; description: string }
  chapters: ChapterListItem[]
} | null

export type ChapterResponse =
  | { ok: false; code: 'LOGIN_REQUIRED' | 'PAYMENT_REQUIRED' | 'NOT_FOUND' | 'NOT_PUBLISHED' }
  | {
      ok: true
      chapter: {
        slug: string
        title: string
        theme: string
        content: string
        status: 'published' | 'draft'
        serie: Serie
        subjectSlug: string
      }
      subjectName: string
      subjectEmoji: string
      prev: { slug: string; title: string } | null
      next: { slug: string; title: string } | null
    }

import { Analytics } from '@vercel/analytics/next'
import { Cairo } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' })

export const metadata: Metadata = {
  title: 'Learnova | تعلم الرياضيات بثقة',
  description: 'منصة Learnova التعليمية لطلاب المرحلة الثانوية: شرح مبسط، تدريب مستمر، ونتائج أفضل.',
  generator: 'v0.app',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f7f9fc' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl" className="bg-background"><body className={`${cairo.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

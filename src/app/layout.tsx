import Header from '@/layout/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from '@/layout/Footer'
import { Analytics } from '@vercel/analytics/react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'DevAlex',
  description: 'Desenvolvedor Web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} text-zinc-100`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}

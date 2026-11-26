import type { Metadata } from 'next'

import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteName } from '@/constants/climbing'

export const metadata: Metadata = {
  title: `${siteName} — Escalada em rocha no Brasil`,
  description: 'Encontre destinos de escalada no Brasil, explore o Google Maps e filtre picos de escalada esportiva, tradicional e boulder.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
        <Navbar />
        <main id="conteudo" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

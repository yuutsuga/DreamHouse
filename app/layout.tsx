import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dream House',
  description: 'O imóvel que combina com você, é aqui!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ul>
          <li>
            <Link href="/login" legacyBehavior>
              Login
            </Link>
          </li>
        </ul>
        {children}
        <Footer />
      </body>
    </html>
  )
}

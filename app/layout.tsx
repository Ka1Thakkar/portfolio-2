import Navbar from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kavan Thakkar',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=' scroll-smooth transition-all ease-in-out'>
      <Navbar />
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dunbar Plumbing',
  description: 'Expect the best service | West Side Vancouver resedential plumbing business, Dunbar Plumbing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
       
      <body className={inter.className}>
      <Nav />
        {children}
     <Footer />
      </body>

    </html>
  )
}

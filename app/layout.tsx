import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

const roboto = Roboto({ weight: '400',
subsets: ['latin'] })

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
       
      <body className={roboto.className}>
      <Nav />
        {children}
     <Footer />
      </body>

    </html>
  )
}

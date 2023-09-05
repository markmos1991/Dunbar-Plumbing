import Areas from '@/components/areas'
import Contact from '@/components/contact'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
   <Hero />
  
   <Services />
    
   <Areas />
   <Contact />
   
    </div>
  )
}

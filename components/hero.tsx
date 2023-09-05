import Image from 'next/image'

export default function Hero() {
  return (

    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl font-bold tracking-loose text-black sm:text-6xl">Dunbar Plumbing
            
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 mb-4">Expert plumbers serving Vancouvers West Side. Expect the best service.</p>
          <div className="flex justify-center">
           
            <a
             href="/contact"
            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Get in Touch
           </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
          <Image
            src="/header.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="absolute inset-0 -z-10 opacity-75 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
    //     <div
    //   className="bg-cover bg-center bg-no-repeat relative py-24 sm:py-32">
    //     <Image
    //   src="/header.JPG"
    //   width={500}
    //   height={500}
    //   alt="Picture of the author"
    //   className="absolute inset-0 -z-10 grayscale opacity-75 h-full w-full object-cover"
    // />
    //     <div className="mx-auto  max-w-7xl px-6 lg:px-8 ">
    //       <div className="mx-auto items-center text-center max-w-2xl lg:mx-0">
    //         <h2 className="text-4xl font-bold tracking-loose text-red-700 sm:text-6xl">Dunbar Plumbing</h2>
    //         <p className="mt-6 text-xl leading-8 text-red-600">
    //           Expect the best service
    //         </p>
    //         <div className="mt-10  items-center gap-x-6">
    //         <a
    //           href="#"
    //           className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    //         >
    //           Get in Touch
    //         </a>

    //       </div>
    //       </div>
    //     </div>
    //   </div>
  )
}

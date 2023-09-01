import React from 'react'

const Contact = () => {
  return (
    
  <div className="container px-5 bg-blue-900 py-4 items-center mx-auto flex sm:flex-nowrap flex-wrap">
    <div className=" bg-white  rounded-lg w-full h-full p-10 flex justify-center relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginwidth="0" scrolling="no"  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d41678.97822218933!2d-123.2064108920306!3d49.2396999642059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1693583270134!5m2!1sen!2suk"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 

      <div className="bg-white relative justify-start flex flex-wrap py-6 rounded shadow-md">
        
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">info@dunbarplumbing.ca</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">604-312-2686</p>
        </div>
      </div>
    </div>
    
  </div>

  )
}

export default Contact
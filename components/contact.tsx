import React from 'react'

const Contact = () => {
  return (
    
  <div className=" px-5 bg-blue-900 py-4 items-center">
    <div className="  rounded-lg w-full h-full p-10 flex justify-center relative">
      <iframe className="absolute w-full h-full inset-0" title="map" scrolling="no"  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d41678.97822218933!2d-123.2064108920306!3d49.2396999642059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1693583270134!5m2!1sen!2suk"  loading="lazy" ></iframe> 

      <div className="bg-white relative justify-start flex flex-wrap py-6 rounded shadow-md">
        
        <div className="lg:w-1/2 mt-4 mx-20 lg:mt-0">
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
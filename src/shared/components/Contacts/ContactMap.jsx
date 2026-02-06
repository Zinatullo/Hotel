import React from 'react'

export default function ContactMap() {
  return (
    <div className="w-full lg:w-1/2">
      <h2 className="text-xl font-normal text-neutral-900 mb-6">Как нас найти</h2>
      
      <div className="w-full h-125 rounded-lg overflow-hidden border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8157!2d72.8047441!3d40.5109372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdae82a1cd76e9%3A0xf2734c8b6f8c8a7b!2z0KjQutC-0LvQsC3Qs9C40LzQvdCw0LfQuNGPICLQntC70LjQvNC_Ig!5e0!3m2!1sru!2skg!4v1707234567890!5m2!1sru!2skg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        />
      </div>
      <div className="mt-10 bg-[#FFF7DC] p-5 rounded-xl flex flex-col gap-3">
        <h4 className="">Как добраться</h4>
        <span className='text-gray-500'>• От метро "Тверская" - 5 минут пешком</span>
        <span className='text-gray-500'>• От аэропорта Шереметьево - 40 минут на автомобиле</span>
        <span className='text-gray-500'>• От Казанского вокзала - 15 минут на такси</span>
      </div>
    </div>
  )
}
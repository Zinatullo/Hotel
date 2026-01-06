import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Hotel() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <section>
        <div
          className="min-h-screen bg-center bg-cover relative flex items-center justify-center text-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1634041441461-a1789d008830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div
            className={`relative z-10 max-w-2xl px-4 text-white flex flex-col gap-3
              transition-all duration-700 ease-out
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="uppercase tracking-widest text-sm">
              Добро пожаловать в Grand Hotel
            </span>

            <h3 className="text-xl md:text-2xl font-semibold leading-tight">
              Комфорт и уют в самом сердце города
            </h3>

            <div className="flex gap-4 justify-center mt-8">
              <NavLink
                to="/booking"
                className="px-6 py-3 rounded-xl font-medium
                           bg-amber-700 text-white
                           hover:bg-amber-800 transition"
              >
                Забронировать номер {'>'}
              </NavLink>

              <NavLink
                to="/numbers"
                className="px-6 py-3 rounded-xl font-medium
                           bg-white/20 backdrop-blur-md border border-white/30
                           hover:bg-white/30 transition"
              >
                Наши номера
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <div className="relative -mt-20 z-20 px-4"> 
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-around gap-6
                          rounded-2xl shadow-2xl p-8 bg-white border border-gray-300">
            
            <div className="relative w-64">
              <h5 className="text-gray-700 mb-2 font-medium">Дата заезда</h5>
              <input
                type="date"
                className="w-full py-3 px-4 pr-12 rounded-xl bg-white border border-gray-300 
                           shadow-lg focus:outline-none focus:ring-2 transition-all duration-200"
              />
            </div>

            <div className="relative w-64">
              <h5 className="text-gray-700 mb-2 font-medium">Дата выезда</h5>
              <input
                type="date"
                className="w-full py-3 px-4 pr-12 rounded-xl bg-white border border-gray-300 
                           shadow-lg focus:outline-none focus:ring-2 transition-all duration-200"
              />
            </div>

            <div className="relative w-64">
              <h5 className="text-gray-700 mb-2 font-medium">Количество гостей</h5>
              <select className="w-full py-3 px-4 pr-12 rounded-xl bg-white border border-gray-300 
                                 shadow-lg focus:outline-none focus:ring-2 appearance-none">
                <option>1 гость</option>
                <option>2 гостя</option>
                <option>3 гостя</option>
                <option>4 гостя</option>
                <option>5+ гостей</option>
              </select>
              <svg className="absolute right-4 top-11 w-6 h-6 text-gray-500 pointer-events-none" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="relative w-64 flex flex-col">
              <h5>ㅤ</h5>
              <NavLink
                to="/numbers"
                className="px-auto pl-19 py-3 rounded-xl font-medium 
                           bg-amber-700 text-white
                           hover:bg-amber-800 transition"
              >
                Найти номер
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
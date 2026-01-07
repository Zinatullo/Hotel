import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Booking() {
  return (
    <section className='mt-25'>
      <div
        className="h-[50vh] bg-center bg-cover relative flex items-center justify-center text-center mt-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1654086317502-531c0d05919b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwZWxlZ2FudHxlbnwxfHx8fDE3NjA2ODE2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-white px-4">
          <h1 className="text-lg md:text-xl font-semibold mb-2">Готовы забронировать?</h1>
          <p className="text-base md:text-lg mb-6">Свяжитесь с нами по телефону или оставьте заявку онлайн</p>

          <div className="flex gap-4 justify-center mt-6">
            <NavLink
              to="/booking"
              className="px-6 py-3 rounded-xl font-medium
                         bg-amber-700 text-white
                         hover:bg-amber-800 transition"
            >
              Забронировать сейчас 
            </NavLink>

            <NavLink
              to="/contacts"
              className="px-6 py-3 rounded-xl font-medium
                         bg-white/10 backdrop-blur-md border border-white/30
                         hover:bg-white/30 transition"
            >
              Связатся с нами
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Choose() {
  return (
    <>
    <section className='my-30'>
        <div className="mx-auto">
            <div className="text-center  gap-3">
                <h3>Не можете выбрать?</h3>
                <p className='w-150 mx-auto text-gray-500 my-5'>Свяжитесь с нами, и мы поможем подобрать идеальный номер для вашего пребывания</p>
                                <NavLink to='/booking' className="px-7 py-2 mt-4 h-10 rounded-xl bg-amber-700  text-medium
                                   text-white hover:bg-amber-800 transition ">
                  Связатся с нами
                </NavLink>
            </div>
        </div>
    </section>
    </>
  )
}

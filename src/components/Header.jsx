import React, { useState } from 'react';
import { IoCallOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
  export const navs = [
    { id: 1, path: '/', name: 'Главная' },
    { id: 2, path: '/about', name: 'О нас' },
    {id:3,path:'/numbers',name:"Номера"},
    { id: 4, path: '/services', name: 'Услуги' },
    { id: 5, path: '/restaurant', name: 'Ресторан' },
    { id: 6, path: '/gallery', name: 'Галерея' },
    { id: 7, path: '/reviews', name: 'Отзывы' },
    { id: 8, path: '/contacts', name: 'Контакты' },
  ];
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur z-50">
      <div className="max-w-8xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mx-10">

          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-14 h-14 bg-amber-700 rounded-xl text-white text-xl flex items-center justify-center font-bold">
              H
            </div>
            <div>
              <h5 className="text-[22px] font-semibold leading-none">
                Grand Hotel
              </h5>
              <p className="text-gray-600 text-[13px] tracking-wide">
                LUXARY & COMFORT
              </p>
            </div>
          </NavLink>

          <nav className="hidden xl:flex items-center gap-3">
            {navs.map(el => (
              <NavLink
                key={el.id}
                to={el.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl transition-all duration-200
                  ${isActive
                    ? 'bg-amber-100 text-amber-700 font-normal'
                    : 'text-gray-800 hover:bg-gray-200'}`
                }
              >
                {el.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-6">

            <div className="hidden xl:flex items-center gap-6">
              <div className="flex items-center gap-4">
                <IoCallOutline className="text-amber-700 w-5 h-5" />
                <span className="text-amber-700 font-medium">
                  +7 (495) 123 45 67
                </span>
              </div>
              <NavLink
                to="/booking"
                className="px-5 py-2 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition"
              >
                Забронировать
              </NavLink>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden text-gray-800 text-3xl"
            >
              {isMobileMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
            </button>
          </div>

        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col py-4 px-6">
            {navs.map(el => (
              <NavLink
                key={el.id}
                to={el.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-3 px-4 rounded-xl text-left transition-all duration-200
                  ${isActive
                    ? 'bg-amber-200 text-amber-900 font-medium'
                    : 'text-gray-800 hover:bg-gray-200'}`
                }
              >
                {el.name}
              </NavLink>
            ))}

            <div className="mt-6 pt-6 border-t border-gray-200">
              <NavLink
                to="/booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-5 py-3 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition text-center"
              >
                Забронировать
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
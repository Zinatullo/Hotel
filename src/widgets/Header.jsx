import { useState } from 'react';
import { IoCallOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

export const navs = [
  { id: 1, path: '/', name: 'Главная' },
  { id: 2, path: '/about', name: 'О нас' },
  { id: 3, path: '/numbers', name: "Номера" },
  { id: 4, path: '/services', name: 'Услуги' },
  { id: 5, path: '/restaurant', name: 'Ресторан' },
  { id: 6, path: '/galary', name: 'Галерея' },
  { id: 7, path: '/reviews', name: 'Отзывы' },
  { id: 8, path: '/contacts', name: 'Контакты' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">

          <NavLink to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-amber-700 rounded-lg sm:rounded-xl text-white text-base sm:text-lg md:text-xl flex items-center justify-center font-bold shrink-0">
              H
            </div>
            <div>
              <h5 className="text-sm sm:text-base md:text-lg lg:text-[22px] font-semibold leading-tight">
                Grand Hotel
              </h5>
              <p className="text-gray-600 text-[10px] sm:text-xs md:text-[13px] tracking-wide">
                LUXURY & COMFORT
              </p>
            </div>
          </NavLink>

          <nav className="hidden xl:flex items-center gap-1">
            {navs.map(el => (
              <NavLink
                key={el.id}
                to={el.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl transition-all duration-200 text-sm whitespace-nowrap
                  ${isActive
                    ? 'bg-amber-100 text-amber-900 font-medium'
                    : 'text-gray-800 hover:bg-gray-100'}`
                }
              >
                {el.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden xl:flex items-center gap-4">
              <div className="hidden 2xl:flex items-center gap-3">
                <IoCallOutline className="text-amber-700 w-5 h-5" />
                <span className="text-amber-700 font-medium text-sm whitespace-nowrap">
                  +7 (495) 123 45 67
                </span>
              </div>
              <NavLink
                to="/booking"
                className="px-4 py-2 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition text-sm font-medium whitespace-nowrap"
              >
                Забронировать
              </NavLink>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden text-gray-800 text-2xl sm:text-3xl p-2 hover:bg-gray-100 rounded-lg transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
            </button>
          </div>

        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto">
            <nav className="flex flex-col py-4 px-4 sm:px-6 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navs.map(el => (
                <NavLink
                  key={el.id}
                  to={el.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-3 px-4 rounded-xl text-left transition-all duration-200
                    ${isActive
                      ? 'bg-amber-100 text-amber-700 font-medium'
                      : 'text-gray-800 hover:bg-gray-100'}`
                  }
                >
                  {el.name}
                </NavLink>
              ))}

              <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                <a 
                  href="tel:+74951234567"
                  className="flex items-center justify-center gap-3 text-amber-700 font-medium"
                >
                  <IoCallOutline className="w-5 h-5" />
                  <span>+7 (495) 123 45 67</span>
                </a>
                <NavLink
                  to="/booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-5 py-3 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition text-center font-medium"
                >
                  Забронировать
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
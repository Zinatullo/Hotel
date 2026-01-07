import { useEffect, useRef, useState } from "react"
import { GoPeople } from "react-icons/go"
import { CiWifiOn } from "react-icons/ci"
import { NavLink } from 'react-router-dom';

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1670800050441-e77f8c82963f",
      price: "от 4 500₽/ночь",
      title: "Стандартный номер",
      text: "Уютный номер с современным дизайном",
      guests: "2 гостей",
      size: "25 м²",
      type: "standart",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1670800050441-e77f8c82963f",
      price: "от 5 200₽/ночь",
      title: "Стандарт Плюс",
      text: "Улучшенный номер с рабочей зоной",
      guests: "2 гостей",
      size: "28 м²",
      type: "standart",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1759223198981-661cadbbff36",
      price: "от 8 500₽/ночь",
      title: "Люкс",
      text: "Просторный номер с панорамным видом",
      guests: "2 гостей",
      size: "45 м²",
      type: "luxe",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1759223198981-661cadbbff36",
      price: "от 12 000₽/ночь",
      title: "Делюкс",
      text: "Роскошный номер с джакузи",
      guests: "2 гостей",
      size: "55 м²",
      type: "luxe",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1654243397456-73da481a623e",
      price: "от 6 500₽/ночь",
      title: "Семейный номер",
      text: "Для отдыха с детьми",
      guests: "4 гостей",
      size: "35 м²",
      type: "family",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1654243397456-73da481a623e",
      price: "от 10 500₽/ночь",
      title: "Апартамент",
      text: "С кухней для долгого проживания",
      guests: "4 гостей",
      size: "60 м²",
      type: "apartament",
    },
  ]

  const [active, setActive] = useState("all")
  const cardsRef = useRef([])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    }

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [active])

  const filtered =
    active === "all"
      ? rooms
      : rooms.filter((r) => r.type === active)

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex justify-center mb-16">
          <div className="flex bg-gray-200 rounded-full p-1 gap-1 text-sm">
            {[
              ["all", "Все номера"],
              ["standart", "Стандарт"],
              ["luxe", "Люкс"],
              ["family", "Семейные"],
              ["apartament", "Апартаменты"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-4 sm:px-6 py-2 rounded-full transition
                  ${
                    active === key
                      ? "bg-white shadow"
                      : "text-gray-600"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((el, i) => (
            <div
              key={el.id}
              ref={(elRef) => (cardsRef.current[i] = elRef)}
              className="room-card flex flex-col border border-gray-300
                         rounded-xl overflow-hidden bg-white"
            >
              <div className="relative h-56">
                <span className="absolute top-3 right-3 bg-amber-700
                                 text-white text-sm px-3 py-1 rounded-lg">
                  {el.price}
                </span>
                <img
                  src={el.image}
                  className="w-full h-full object-cover
                             transition-transform duration-700 hover:scale-110"
                />
              </div>

              <div className="flex flex-col gap-4 p-6 flex-1">
                <h3 className="text-lg font-medium">{el.title}</h3>
                <p className="text-gray-500 text-sm">{el.text}</p>

                <div className="flex gap-5 text-gray-500 text-sm mt-auto">
                  <span className="flex items-center gap-1">
                    <GoPeople /> {el.guests}
                  </span>
                  <span>{el.size}</span>
                  <span className="flex items-center gap-1">
                    <CiWifiOn /> Wi-Fi
                  </span>
                </div>

                <NavLink to='/booking' className="px-30 py-2 mt-4 h-10 rounded-xl bg-amber-700
                                   text-white hover:bg-amber-800 transition">
                  Забронировать
                </NavLink>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .room-card {
          opacity: 0;
          transform: translateY(30px) scale(0.97);
          transition: all 1s ease-in-out;
        }
        .room-card.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </section>
  )
}
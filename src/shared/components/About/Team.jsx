import React from 'react'

export default function Team() {
  function getAvatar(name) {
    return name[0] + name.split(" ")[1][0]
  }

  let reviews = [
    { name: "Александр Волков", b: "Генеральный директор" },
    { name: "Елена Соколова", b: "Управляющий отелем" },
    { name: "Дмитрий Морозов", b: "Шеф-повар" },
  ]

  return (
    <section className="py-20 md:py-30 bg-gray-50">
      <div className="mx-auto px-4 md:px-8">

        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[22px] md:text-[24px] mb-4">
            Наша команда
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Профессионалы своего дела, готовые сделать ваше пребывание незабываемым
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {reviews.map(el => (
            <div
              key={el.name}
              className="w-75 md:w-[320px] border border-gray-200 rounded-2xl py-10 text-center"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-yellow-100 flex items-center justify-center text-[22px] text-orange-700 mb-6">
                {getAvatar(el.name)}
              </div>

              <p className="mb-4">{el.name}</p>
              <p className="text-gray-500">{el.b}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

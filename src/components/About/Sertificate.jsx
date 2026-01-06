import React from 'react'

export default function Sertificate() {
  let reviews = [
    { name: "Лучший отель 2024" },
    { name: "Сертификат качества" },
    { name: "Премия за сервис" },
    { name: "Эко-отель года" },
  ]

  return (
    <section className="py-30 bg-gray-50 px-4">
      <div
        className="
          mx-auto
          max-w-[320px]
          md:max-w-165
          lg:max-w-330
        "
      >
        <div className="text-center mb-14">
          <h2 className="text-[24px] mb-4">Награды и сертификаты</h2>
          <p className="text-gray-500">
            Наше качество признано профессиональным сообществом
          </p>
        </div>

        <div className="grid grid-cols-1 min-[800px]:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center sm:  flex-col">
          {reviews.map(el => (
            <div
              key={el.name}
              className="
                w-full
                max-w-[320px]
                bg-card text-card-foreground
                flex flex-col items-center gap-6
                rounded-xl border p-6 text-center
                border-gray-300
                sm:
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 text-amber-700"
              >
                <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
                <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
                <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
                <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
              </svg>

              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import React from 'react'

export default function Missons() {
  let card = [
    {
      name:"Качество",
      text:"Мы следим за каждой деталью, чтобы обеспечить высочайшее качество обслуживания"
    },
    {
      name:"Гостеприимство",
      text:"Наша команда всегда рада помочь и сделать ваше пребывание приятным"
    },
    {
      name:"Инновации",
      text:"Мы внедряем современные технологии для вашего комфорта"
    },
  ]

  return (
    <section className="my-30">
      <div className="mx-auto">

        <div className="text-center">
          <h4 className='text-[16px] mb-8'>Наша миссия и ценности</h4>
          <p className='text-gray-600 w-190 mx-auto'>
            Мы верим, что отель — это не просто место для ночлега, это ваш дом вдали от дома.
            Наша цель — сделать каждое пребывание максимально комфортным, безопасным и запоминающимся.
          </p>
        </div>

        <div className="
          mt-10
          flex
          gap-5
          justify-center
          text-center
          flex-wrap
        ">
          {card.map(el => (
            <div
              key={el.name}
              className="
                border border-gray-300 rounded-xl
                px-5 py-8
                w-[320px]
                shrink-0
              "
            >
              <b className='font-medium text-[20px]'>{el.name}</b>
              <p className='text-gray-600 mt-6'>{el.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

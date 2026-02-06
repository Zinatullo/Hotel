import { Car, UtensilsCrossed, Wifi } from 'lucide-react'
import React from 'react'

export default function AdvCards() {
    let cards = [
        {
            icon:<Wifi
        class="lucide lucide-party-popper w-6 h-6 text-amber-700"
             />,
            text:"Бесплатный Wi-Fi",
            p:"Во всех зонах отеля"

        },
        {
            icon:<UtensilsCrossed 
        class="lucide lucide-party-popper w-6 h-6 text-amber-700"
            />,
            text:"Завтрак",
            p:"Шведский стол включен"
        },
                {
            icon:<Car 
        class="lucide lucide-party-popper w-6 h-6 text-amber-700"
             />,
            text:"Парковка",
            p:"Охраняемая парковка"
        }
    ]
  return (
    <>
    <section>
        <div className="mx-auto flex flex-col gap-10 my-50">
            <div className="text-center">
                <h2 className='text-bold text-[20px]'>
                    Дополнительные удобства
                </h2>
                <p className="text-gray-500 my-5">Всё необходимое для комфортного проживания</p>
            </div>
            <div className="flex justify-evenly mx-50 gap-8 flex-wrap" >
                {cards.map((el)=>(
                    <div className="flex flex-col gap-5 text-center border border-gray-200 p-8 rounded-lg  min-w-70 w-[30%] hover:shadow-lg transition lg:w-[%]">
                                        <div
                  className="
                    w-15 h-15 mb-5 rounded-full bg-amber-100
                    mx-auto 
                    flex items-center justify-center
                    hover:bg-amber-200 transition
                  "
                >
                  {el.icon}
                </div>
                <h3 className='text-[18px]'>{el.text}</h3>
                <p className='text-gray-500'>{el.p}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

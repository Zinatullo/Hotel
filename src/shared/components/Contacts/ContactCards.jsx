import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function ContactCards() {
    let conCards = [
        {
            name:"Телефон",
            info:"+7 (495) 123-45-67",
            icon:<Phone/>
        },
        {
            name:"Email",
            info:"info@grandhotel.ru",
            icon:<Mail/>
        },
        {
            name:"Адрес",
            info:"г. Москва, ул. Тверская, д. 1",
            icon:<MapPin />
        },
        {
            name:"Ресепшн",
            info:"Круглосуточно 24/7",
            icon:<Clock/>
        },
    ]
    
    return (
        <section className='m-30'>
            <div className="max-w-7xl mx-auto px-5 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {conCards.map((card, index)=>(
                        <div 
                            key={index} 
                            className="flex flex-col gap-5 items-center text-center py-10 px-20 border border-gray-300 rounded-xl"
                        >
                            <div className="text-4xl text-amber-700 mb-4 bg-amber-100 p-4 rounded-full">
                                {card.icon}
                            </div>
                            <h3 className="text-lg font-normal">{card.name}</h3>
                            <p className="text-gray-600 text-lg w-40">{card.info}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
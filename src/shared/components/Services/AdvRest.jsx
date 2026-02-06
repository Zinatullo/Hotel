import React from 'react'

export default function AdvRest() {
  let text=["Залы вместимостью от 10 до 200 человек","Современное аудио-визуальное оборудование и Wi-Fi","Кейтеринг и coffee-break от нашего ресторана","Персональный менеджер мероприятия"]
  return (
    <>
    <section className='my-50'>
        <div className="mx-auto">
            <div className="flex  items-center  gap-20 mx-20">
                <img className='w-200 h-105  object-cover  rounded-xl' src="https://images.unsplash.com/photo-1652520415795-7f13ed13b1f4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA3NzAyMTV8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Events" ></img>
                <div className="w-200 flex flex-col gap-7">
                  <h3 className="">Деловые мероприятия и праздники</h3>
                  <p className="text-gray-500">Мы специализируемся на организации корпоративных мероприятий, конференций, семинаров и частных праздников. Наши специалисты помогут с планированием, декором и кейтерингом.</p>
                      {text.map((el)=>(
                        <div className="flex gap-2 items-center" key={el}>
                          <div className="w-2 h-2 bg-amber-600 rounded-2xl "></div>
                          <span className='
                          '>{el}</span>
                        </div>
                      ))}
                </div>
            </div>
        </div>

    </section>
            <div className="bg-amber-100 text-center mt-10 py-10">

                      <span className='text-gray-600 flex justify-center'>Для получения подробной информации о стоимости услуг и бронирования, пожалуйста, <p className="text-amber-700 mx-1">  свяжитесь с нами </p> по телефону <p className="text-amber-700 ml-1">+7 (495) 123-45-67</p></span>
        </div>
    </>
  )
}

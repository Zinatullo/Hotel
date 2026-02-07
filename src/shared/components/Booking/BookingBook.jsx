import React, { useState, useMemo } from 'react'
import { Calendar, Users } from 'lucide-react'
    const numbers = [ 
        {
            name:"John Doe",
            email:"John@gmail.com",
            phone:"1234567890",
            checkIn:"2023-10-01",
            checkOut:"2023-10-05",
            guests:2,
            roomType:"Стандартный номер"
        }
    ]
export default function BookingForm() {

  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    roomType: ''
  })

  const steps = [
    { id: 1, label: 'Даты и номер' },
    { id: 2, label: 'Детали' },
    { id: 3, label: 'Подтверждение' }
  ]

  const roomTypes = [
    { name: 'Стандартный номер', price: 3500 },
    { name: 'Улучшенный номер', price: 5000 },
    { name: 'Люкс', price: 8500 },
    { name: 'Семейный номер', price: 6500 }
  ]

  const guestOptions = [1, 2, 3, 4, 5, 6]

  const nights = useMemo(() => {
    if (!formData.checkIn || !formData.checkOut) return 0
    const start = new Date(formData.checkIn)
    const end = new Date(formData.checkOut)
    const diffTime = end - start
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }, [formData.checkIn, formData.checkOut])

  const selectedRoomPrice = useMemo(() => {
    const room = roomTypes.find(r => r.name === formData.roomType)
    return room ? room.price : 0
  }, [formData.roomType])

  // Общая стоимость
  const totalPrice = useMemo(() => {
    return selectedRoomPrice * nights
  }, [selectedRoomPrice, nights])

  // Форматирование даты
  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU')
  }

  // Форматирование числа с разделителем
  const formatPrice = (price) => {
    return price.toLocaleString('ru-RU')
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <section className="py-12 md:py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center
                      font-semibold text-lg transition-all duration-300
                      ${
                        currentStep >= step.id
                          ? 'bg-amber-700 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }
                    `}
                  >
                    {step.id}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`
                      w-24 md:w-32 h-1 mx-2 transition-all duration-300
                      ${
                        currentStep > step.id
                          ? 'bg-amber-700'
                          : 'bg-gray-200'
                      }
                    `}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Левая панель - форма */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-6">
                Даты и номер
              </h2>

              <div className="space-y-6">
                {/* Даты заезда и выезда */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Дата заезда */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4" />
                      Дата заезда
                    </label>
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) =>
                        setFormData({ ...formData, checkIn: e.target.value })
                      }
                      className="
                        w-full px-4 py-3 rounded-xl
                        bg-gray-50 border border-gray-200
                        focus:outline-none focus:ring-2 focus:ring-amber-500
                        transition-all duration-200
                      "
                    />
                  </div>

                  {/* Дата выезда */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4" />
                      Дата выезда
                    </label>
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) =>
                        setFormData({ ...formData, checkOut: e.target.value })
                      }
                      className="
                        w-full px-4 py-3 rounded-xl
                        bg-gray-50 border border-gray-200
                        focus:outline-none focus:ring-2 focus:ring-amber-500
                        transition-all duration-200
                      "
                    />
                  </div>
                </div>

                {/* Количество гостей */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Users className="w-4 h-4" />
                    Количество гостей
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: parseInt(e.target.value) })
                    }
                    className="
                      w-full px-4 py-3 rounded-xl
                      bg-gray-50 border border-gray-200
                      focus:outline-none focus:ring-2 focus:ring-amber-500
                      appearance-none cursor-pointer
                      transition-all duration-200
                    "
                  >
                    {guestOptions.map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'гость' : num < 5 ? 'гостя' : 'гостей'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Тип номера */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Тип номера
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) =>
                      setFormData({ ...formData, roomType: e.target.value })
                    }
                    className="
                      w-full px-4 py-3 rounded-xl
                      bg-gray-50 border border-gray-200
                      focus:outline-none focus:ring-2 focus:ring-amber-500
                      appearance-none cursor-pointer
                      transition-all duration-200
                    "
                  >
                    <option value="">Выберите номер</option>
                    {roomTypes.map((room) => (
                      <option key={room.name} value={room.name}>
                        {room.name} - {formatPrice(room.price)} ₽/ночь
                      </option>
                    ))}
                  </select>
                </div>

                {/* Кнопка далее */}
                <div className="flex justify-end pt-4">
                  <button
                    onClick={handleNext}
                    disabled={!formData.checkIn || !formData.checkOut || !formData.roomType}
                    className="
                      px-8 py-3 rounded-xl
                      bg-amber-700 text-white font-medium
                      hover:bg-amber-800
                      disabled:bg-gray-300 disabled:cursor-not-allowed
                      transition-colors duration-200
                    "
                  >
                    Далее
                  </button>
                </div>
              </div>
            </div>

            {/* Правая панель - детали бронирования */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 h-fit">
              <h3 className="text-lg font-semibold mb-6">
                Детали бронирования
              </h3>
              
              <div className="space-y-4">
                {/* Заезд */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Заезд:</span>
                  <span className="font-medium">
                    {formData.checkIn ? formatDate(formData.checkIn) : '—'}
                  </span>
                </div>

                {/* Выезд */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Выезд:</span>
                  <span className="font-medium">
                    {formData.checkOut ? formatDate(formData.checkOut) : '—'}
                  </span>
                </div>

                {/* Количество ночей */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Ночей:</span>
                  <span className="font-medium">{nights || '—'}</span>
                </div>

                {/* Гостей */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Гостей:</span>
                  <span className="font-medium">{formData.guests}</span>
                </div>

                {/* Номер */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Номер:</span>
                  <span className="font-medium">
                    {formData.roomType || '—'}
                  </span>
                </div>

                {/* Разделитель */}
                {formData.roomType && nights > 0 && (
                  <>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>
                          {formatPrice(selectedRoomPrice)} ₽ × {nights} {nights === 1 ? 'ночь' : nights < 5 ? 'ночи' : 'ночей'}
                        </span>
                        <span>{formatPrice(totalPrice)} ₽</span>
                      </div>
                    </div>

                    {/* Итого */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">Итого:</span>
                        <span className="font-bold text-xl text-amber-700">
                          {formatPrice(totalPrice)} ₽
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
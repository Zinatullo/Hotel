import React, { useState, useMemo } from 'react'
import { Calendar, Users, CreditCard, Check } from 'lucide-react'

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })

  const [bookingNumber] = useState(`GH-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000)}`)

  const roomTypes = [
    { name: 'Стандартный номер', price: 3500 },
    { name: 'Улучшенный номер', price: 5000 },
    { name: 'Люкс', price: 8500 },
    { name: 'Семейный номер', price: 6500 }
  ]

  const nights = useMemo(() => {
    if (!formData.checkIn || !formData.checkOut) return 0
    const start = new Date(formData.checkIn)
    const end = new Date(formData.checkOut)
    const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }, [formData.checkIn, formData.checkOut])

  const roomPrice = useMemo(() => {
    const room = roomTypes.find(r => r.name === formData.roomType)
    return room ? room.price : 0
  }, [formData.roomType])

  const totalPrice = roomPrice * nights

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const parts = dateString.split('-')
    return `${parts[2]}.${parts[1]}.${parts[0]}`
  }

  const formatPrice = (price) => {
    return price.toLocaleString('ru-RU')
  }

  const formatCardNumber = (value) => {
    const numbers = value.replace(/\D/g, '')
    let formatted = ''
    for (let i = 0; i < numbers.length && i < 16; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += ' '
      }
      formatted += numbers[i]
    }
    return formatted
  }

  const formatExpiry = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length >= 2) {
      return numbers.slice(0, 2) + '/' + numbers.slice(2, 4)
    }
    return numbers
  }

  const goNext = () => setCurrentStep(currentStep + 1)
  const goBack = () => setCurrentStep(currentStep - 1)

  const canGoNext = () => {
    if (currentStep === 1) {
      return formData.checkIn && formData.checkOut && formData.roomType && nights > 0
    }
    if (currentStep === 2) {
      return formData.firstName && formData.lastName && formData.email && formData.phone
    }
    if (currentStep === 3) {
      const cardClean = formData.cardNumber.replace(/\s/g, '')
      return cardClean.length === 16 && formData.expiryDate.length === 5 && formData.cvv.length === 3
    }
    return false
  }

  return (
    <div className={`min-h-screen py-12 px-4 ${currentStep === 4 ? 'bg-linear-to-br from-orange-100 via-amber-100 to-orange-200' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto">
        
        {currentStep < 4 && (
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3].map((step, idx) => (
              <React.Fragment key={step}>
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg
                  ${currentStep >= step ? 'bg-amber-700 text-white' : 'bg-gray-200 text-gray-500'}
                `}>
                  {step}
                </div>
                {idx < 2 && (
                  <div className={`w-32 h-1 ${currentStep > step ? 'bg-amber-700' : 'bg-gray-200'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          
          <div className={`lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 ${currentStep === 4 ? 'lg:col-span-3 max-w-3xl mx-auto' : ''}`}>
            
            {currentStep === 1 && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Даты и номер</h2>
                
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Дата заезда</label>
                      <input
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Дата выезда</label>
                      <input
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Количество гостей</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей'}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Тип номера</label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                    >
                      <option value="">Выберите номер</option>
                      {roomTypes.map(room => (
                        <option key={room.name} value={room.name}>
                          {room.name} - {formatPrice(room.price)} ₽/ночь
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      onClick={goNext}
                      disabled={!canGoNext()}
                      className="px-8 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Далее
                    </button>
                  </div>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Данные гостя</h2>
                
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Фамилия</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      onClick={goBack}
                      className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                    >
                      Назад
                    </button>
                    <button
                      onClick={goNext}
                      disabled={!canGoNext()}
                      className="px-8 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Далее
                    </button>
                  </div>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Оплата</h2>
                
                <div className="space-y-5">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-sm text-gray-700">Это демо-версия. Реальная оплата не производится.</p>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <CreditCard className="w-4 h-4" />
                      Номер карты
                    </label>
                    <input
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: formatCardNumber(e.target.value) })}
                      placeholder="0000 0000 0000 0000"
                      maxLength="19"
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Срок действия</label>
                      <input
                        type="text"
                        value={formData.expiryDate}
                        onChange={(e) => setFormData({ ...formData, expiryDate: formatExpiry(e.target.value) })}
                        placeholder="MM/ГГ"
                        maxLength="5"
                        className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV</label>
                      <input
                        type="text"
                        value={formData.cvv}
                        onChange={(e) => {
                          const numbers = e.target.value.replace(/\D/g, '')
                          if (numbers.length <= 3) {
                            setFormData({ ...formData, cvv: numbers })
                          }
                        }}
                        placeholder="123"
                        maxLength="3"
                        className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      onClick={goBack}
                      className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                    >
                      Назад
                    </button>
                    <button
                      onClick={goNext}
                      disabled={!canGoNext()}
                      className="px-8 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Подтвердить бронирование
                    </button>
                  </div>
                </div>
              </>
            )}

            {currentStep === 4 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-12 h-12 text-green-600" strokeWidth={3} />
                </div>
                
                <h2 className="text-2xl font-semibold mb-4">Бронирование подтверждено!</h2>
                
                <p className="text-gray-600 mb-2">
                  Номер брони: <span className="font-semibold text-gray-900">{bookingNumber}</span>
                </p>
                
                <p className="text-gray-600 mb-10">
                  Мы отправили подтверждение на email <span className="font-semibold">{formData.email}</span>
                </p>

                <div className="bg-amber-50 rounded-xl p-8 max-w-md mx-auto mb-8">
                  <div className="grid grid-cols-2 gap-6 text-left">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Заезд</p>
                      <p className="font-medium">{formatDate(formData.checkIn)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Выезд</p>
                      <p className="font-medium">{formatDate(formData.checkOut)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Номер</p>
                      <p className="font-medium">{formData.roomType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Гостей</p>
                      <p className="font-medium">{formData.guests}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                  >
                    Новое бронирование
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="px-6 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800"
                  >
                    Распечатать подтверждение
                  </button>
                </div>
              </div>
            )}
          </div>

          {currentStep < 4 && (
            <div className="right-div bg-white rounded-2xl shadow-xl p-6 h-fit">
              <h3 className="text-lg font-semibold mb-6">Детали бронирования</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Заезд:</span>
                  <span className="font-medium">{formData.checkIn ? formatDate(formData.checkIn) : '—'}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Выезд:</span>
                  <span className="font-medium">{formData.checkOut ? formatDate(formData.checkOut) : '—'}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Ночей:</span>
                  <span className="font-medium">{nights || '—'}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Гостей:</span>
                  <span className="font-medium">{formData.guests}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Номер:</span>
                  <span className="font-medium">{formData.roomType || '—'}</span>
                </div>

                {formData.roomType && nights > 0 && (
                  <>
                    <div className="pt-4 mt-4">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{formatPrice(roomPrice)} ₽ × {nights} ночей</span>
                        <span className="font-medium text-gray-900">{formatPrice(totalPrice)} ₽</span>
                      </div>
                    </div>

                    <div className=" pt-4">
                      <div className="flex justify-between">
                        <span className="font-semibold">Итого:</span>
                        <span className="font-bold text-xl text-amber-700">{formatPrice(totalPrice)} ₽</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
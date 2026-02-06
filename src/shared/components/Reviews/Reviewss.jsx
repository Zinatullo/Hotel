import React, { useState } from 'react'

export default function Reviewss() {
  const initialReviews = [
    {
      name: "Мария Иванова",
      stars: 5,
      data: "15 октября 2025",
      comment:
        "Потрясающий отель! Отличный сервис, чистота, комфорт. Обязательно вернёмся снова. Особенно понравился завтрак и вид из окна. Персонал очень дружелюбный и всегда готов помочь.",
    },
    {
      name: "Алексей Петров",
      stars: 5,
      data: "8 октября 2025",
      comment:
        "Идеальное место для деловой поездки. Тихо, удобно, быстрый Wi-Fi. Персонал всегда готов помочь. Конференц-зал оборудован по последнему слову техники.",
    },
    {
      name: "Екатерина Смирнова",
      stars: 5,
      data: "1 октября 2025",
      comment:
        "Провели здесь выходные с семьёй. Детям особенно понравился бассейн. Номера просторные и чистые. Ресторан порадовал разнообразным меню.",
    },
    {
      name: "Дмитрий Козлов",
      stars: 5,
      data: "25 сентября 2025",
      comment:
        "Отмечали здесь юбилей свадьбы. Всё было организовано на высшем уровне! Благодарим команду отеля за профессионализм и внимание к деталям.",
    },
    {
      name: "Анна Волкова",
      stars: 4,
      data: "18 сентября 2025",
      comment:
        "Хороший отель с отличным расположением. Удобно добираться до центра. Единственный минус — парковка маловата, но это не критично.",
    },
    {
      name: "Сергей Морозов",
      stars: 5,
      data: "10 сентября 2025",
      comment:
        "Отель превзошёл все ожидания! Особенно впечатлило спа — после рабочей недели это было именно то, что нужно. Рекомендую всем!",
    },
    {
      name: "Ольга Николаева",
      stars: 5,
      data: "3 сентября 2025",
      comment:
        "Прекрасный отдых! Номер был очень чистым и уютным. Завтраки разнообразные и вкусные. Вид из окна просто потрясающий.",
    },
    {
      name: "Игорь Соколов",
      stars: 5,
      data: "27 августа 2025",
      comment:
        "Останавливался здесь уже в третий раз. Всегда доволен качеством обслуживания. Номера комфортные, персонал приветливый.",
    },
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  function RevCount(ratings) {
    if (!ratings.length) return 0;
    const sum = ratings.reduce((acc, r) => acc + r, 0);
    return (sum / ratings.length).toFixed(1);
  }

  const starCount = reviews.map((el) => el.stars);
  const average = RevCount(starCount);
  const recommendPercent = Math.round(
    (reviews.filter((r) => r.stars >= 4).length / reviews.length) * 100,
  );

  const renderStars = (count) => {
    return "⭐".repeat(count);
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  const getCurrentDate = () => {
    const months = [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    const date = new Date();
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newReview = {
      name: formData.name,
      stars: rating,
      data: getCurrentDate(),
      comment: formData.comment
    };

    setReviews([newReview, ...reviews]); // Add new review at the beginning
    setShowForm(false);
    setRating(0);
    setFormData({ name: '', email: '', comment: '' });
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <div className="mt-30 max-w-3xl mx-auto px-5 py-10 border border-gray-200 rounded-xl p-8 mb-10 flex justify-around items-center bg-white">
        <div className="text-center">
          <div className="text-4xl font-normal text-amber-700 mb-2">{average}</div>
          <div className="text-xl mb-1">{renderStars(Math.round(parseFloat(average)))}</div>
          <div className="text-sm text-gray-500">Средний рейтинг</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-normal text-amber-700 mb-2">{reviews.length}</div>
          <div className="text-sm text-gray-500">Всего отзывов</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-normal text-amber-700 mb-2">{recommendPercent}%</div>
          <div className="text-sm text-gray-500">Рекомендуют отель</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-normal">Все отзывы</h2>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-amber-700 hover:bg-orange-800 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors"
          >
            {showForm ? 'Отменить' : 'Оставить отзыв'}
          </button>
        </div>

        {showForm && (
          <div className="border border-gray-200 rounded-lg p-6 mb-8 bg-white">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Ваша оценка</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="text-3xl transition-colors focus:outline-none"
                    >
                      <span className={star <= (hoveredRating || rating) ? 'text-amber-500' : 'text-gray-300'}>
                        ★
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email (не публикуется)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Ваш отзыв</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  placeholder="Расскажите о вашем впечатлении от отеля..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2.5 rounded-md font-medium transition-colors"
              >
                Отправить отзыв
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-5 bg-white"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-sm font-normal text-amber-700 mr-3">
                  {getInitials(review.name)}
                </div>
                <div className="flex-1">
                  <div className="text-[15px] font-normal mb-1">
                    {review.name}
                  </div>
                  <div className="text-sm">{renderStars(review.stars)}</div>
                </div>
                <div className="text-[13px] text-gray-500">{review.data}</div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
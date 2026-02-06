import { ChefHat, Coffee, Utensils } from "lucide-react";
import React, { useState } from "react";

export default function RestMenu() {
  const [active, setActive] = useState("dinner");
  const foods = [
    { type: "breakfast", name: "Континентальный завтрак", includes: "Круассаны, джемы, кофе", price: "650 ₽" },
    { type: "breakfast", name: "Американский завтрак", includes: "Яйца, бекон, тосты", price: "850 ₽" },
    { type: "breakfast", name: "Блинчики с начинкой", includes: "Творог или ягоды", price: "550 ₽" },
    { type: "breakfast", name: "Омлет", includes: "С овощами и сыром", price: "600 ₽" },

    { type: "lunch", name: "Борщ", includes: "Традиционный со сметаной", price: "450 ₽" },
    { type: "lunch", name: "Стейк из лосося", includes: "С овощами гриль", price: "1200 ₽" },
    { type: "lunch", name: "Паста Карбонара", includes: "Классический рецепт", price: "850 ₽" },
    { type: "lunch", name: "Салат Цезарь", includes: "Курица или креветки", price: "650 ₽" },

    { type: "dinner", name: "Стейк Рибай", includes: "300г, medium, картофель", price: "1800 ₽" },
    { type: "dinner", name: "Морской окунь", includes: "Запечённый с травами", price: "1500 ₽" },
    { type: "dinner", name: "Утиная грудка", includes: "С ягодным соусом", price: "1600 ₽" },
    { type: "dinner", name: "Тирамису", includes: "Классический", price: "450 ₽" }
  ];
  return (
    <section className="py-30 bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-[24px] font-medium">Наше меню</h3>
          <p className="text-gray-500 mt-3 text-[15px]">
            Избранные позиции из нашего меню
          </p>

          <div className="mt-18 mx-auto flex bg-gray-100 rounded-full p-1 max-w-250">
            <button
              onClick={() => setActive("breakfast")}
              className={`flex-1 flex justify-center items-center gap-3 py-0 rounded-full text-[15px] transition font-medium
                ${active === "breakfast" ? "bg-white shadow-sm" : "text-gray-500"}`}
            >
              <Coffee size={18} /> Завтрак
            </button>

            <button
              onClick={() => setActive("lunch")}
              className={`flex-1 flex justify-center items-center gap-3 py-0 rounded-full text-[15px] transition font-medium
                ${active === "lunch" ? "bg-white shadow-sm" : "text-gray-500"}`}
            >
              <Utensils size={18} /> Обед
            </button>

            <button
              onClick={() => setActive("dinner")}
              className={`flex-1 flex justify-center items-center gap-3 py-1 rounded-full text-[15px] transition font-medium
                ${active === "dinner" ? "bg-white shadow-sm" : "text-gray-500"}`}
            >
              <ChefHat size={18} /> Ужин
            </button>
          </div>

          <div className="mt-12 mx-auto max-w-250 border border-gray-200 rounded-2xl px-10">
            {foods
              .filter((el) => el.type === active)
              .map((el, i) => (
                <div key={i}>
                  <div className="flex justify-between py-7 text-left">
                    <div>
                      <h4 className="text-[17px] font-normal text-gray-900">
                        {el.name}
                      </h4>
                      <p className="text-[14px] text-gray-500 mt-1.5">
                        {el.includes}
                      </p>
                    </div>
                    <span className="text-[18px] font-normal text-amber-700">
                      {el.price}
                    </span>
                  </div>

                  <hr className="h- text-gray-200 " />
                </div>
              ))}
          </div>

          <p className="text-[13px] text-gray-500 mt-10">
            Полное меню доступно в ресторане. Цены могут меняться.
          </p>
        </div>
      </div>
    </section>
  );
}

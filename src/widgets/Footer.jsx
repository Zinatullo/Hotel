import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { navs } from "./Header";
import { NavLink } from "react-router-dom";
import { MdOutlinePlace } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";

export default function Footer() {
  let usl = [
    { uls: "Трансфер" },
    { uls: "Спа и массаж" },
    { uls: "Фитнес-зал" },
    { uls: "Конференц-залы" },
    { uls: "Организация мероприятий" },
  ];
  return (
    <>
      <footer className="bg-gray-900 text-white px-30 py-18">
        <div className="container">
          <div className="item flex justify-between items-center">
            <div className="content w-80 ">
              <div className="flex items-center gap-2">
                <div className="w-14 h-14 bg-amber-700 rounded-xl text-white text-xl flex items-center justify-center font-bold">
                  H
                </div>
                <h5 className="text-[18px] font-normal leading-none">
                  Grand Hotel
                </h5>
              </div>
              <p className="text-[15px] font-sans text-gray-300 mt-5">
                Комфорт и уют в самом сердце города. Работаем с 1998 года,
                предоставляя высочайший уровень сервиса для наших гостей.
              </p>
              <div className="flex gap-4 mt-5">
                <div className="w-10 h-10 bg-gray-800 rounded-xl p-3">
                  <SlSocialFacebook />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-xl p-3">
                  <FaInstagram />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-xl p-3">
                  <CiTwitter />
                </div>
              </div>
            </div>
            <div className="w-80 flex flex-col gap-2">
              <b className="mb-2 font-normal">Навигация</b>
              {navs
                .filter((el) => el.id < 7)
                .map((el) => (
                  <NavLink class="color-gray-700" to={el.path} key={el.id}>
                    {el.name}
                  </NavLink>
                ))}
            </div>
            <div className="w-80 flex flex-col gap-3">
              <b className="mb-2 font-normal">Услуги</b>
              {usl.map((el) => (
                <p class="color-gray-700">{el.uls}</p>
              ))}
            </div>
            <div className="w-80 flex flex-col">
              <b className="mb-2 font-normal">Контакты</b>
              <div className="flex items-center gap-2">
                <MdOutlinePlace /> <p>г. Москва, ул. Тверская, д. 1</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlinePhone />
                +7 (495) 123-45-67
              </div>
              <div className="flex items-center gap-2">
                <CiMail />
                info@grandhotel.ru
              </div>
              <div className="flex flex-col mt-10">
                <b className="font-medium">Ресепшн работает:</b>
                <b className="font-normal">Круглосуточно, 24/7</b>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

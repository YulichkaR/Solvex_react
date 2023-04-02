import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Metro = () => {
  const Metro = [
    {
      thirtyPagesTitle: "Метро",
      differentImages: "thirty-pages-metro",
      thirtyPagesText:
        "Чудове місце для вечору з друзями! Тут хороша музика та приємна атмосфера. Бармени працюють швидко та якісно, із розумінням ставляться до всіх клієнтів. Закуски смачні, замовлення приносять дуже швидко. Словом, це бар, куди хочеться повертатися. ",
      thirtyPagesAddress: "м. Львів, вулиця Січових Стрільців, 10",
      thirtyPagesWorkTime: "12:00-22:00",
      thirtyPagesNumber: "+380 (67) 476 49 75",
      thirtyPagesLink:
        "https://lviv.virtual.ua/ua/object/421867/Stantsiia-Universytetska-Subway-Station-Pub.html",
      thirtyPagesInstagram: "https://www.instagram.com/mpublviv/",
      thirtyPagesMap:
        "https://www.google.com/maps?q=%D0%9C%D0%B5%D1%82%D1%80%D0%BE-%D0%BF%D0%B0%D0%B1+%22%D0%A1%D1%82%D0%B0%D0%BD%D1%86%D1%96%D1%8F+%D0%A3%D0%BD%D1%96%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D1%81%D1%8C%D0%BA%D0%B0%22&sxsrf=APwXEddSstDnCHG9Yqdm0GZWxuJ7MokBdQ:1680400423598&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQrgIQJzICCCY6CggAEEcQ1gQQsANKBAhBGABQzxZYpCZgzStoAXABeACAAYIBiAHHCpIBAzcuNpgBAKABAcgBCMABAQ&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjLw-K9i4r-AhXksYsKHY6AANsQ_AUoAXoECAEQAw",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Metro.map((block) => {
          return (
            <ExamplePage
              thirtyPagesTitle={block.thirtyPagesTitle}
              differentImages={block.differentImages}
              thirtyPagesText={block.thirtyPagesText}
              thirtyPagesAddress={block.thirtyPagesAddress}
              thirtyPagesWorkTime={block.thirtyPagesWorkTime}
              thirtyPagesNumber={block.thirtyPagesNumber}
              thirtyPagesLink={block.thirtyPagesLink}
              thirtyPagesInstagram={block.thirtyPagesInstagram}
              thirtyPagesMap={block.thirtyPagesMap}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Lampa = () => {
  const Lampa = [
    {
      thirtyPagesTitle: "Гасова лямпа",
      differentImages: "thirty-pages-lampa",
      thirtyPagesText:
        "«Гасова лямпа» — ресторація-музей. Ми маємо другу найбільшу колекцію гасових лямп у Європі, яка нараховує 528 екземплярів. У нас відтворено всі етапи видобутку й дистиляції нафти. У закладі є точна копія однієї з перших гасових лямп. А ще настільні лямпи імператора Франца-Йосифа, лямпи Джузеппе Гарібальді й Миклухо-Маклая. А на вході в заклад можна зробити фото біля пам’ятника гасовій лямпі і Яну Зегу.",
      thirtyPagesAddress: "м. Львів, вулиця Вірменська, 20",
      thirtyPagesWorkTime: "11:00-22:00",
      thirtyPagesNumber: "+380 (50) 371 09 08",
      thirtyPagesLink: "https://www.fest.lviv.ua/uk/restaurants/gasovalampa",
      thirtyPagesInstagram: "https://www.instagram.com/gasovalampa/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10292.460095597364!2d24.02047109204312!3d49.840296220331815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6d12fb2f95%3A0x9c5e7c27831bbfe3!2z0JPQsNGB0L7QstCwINC70Y_QvNC_0LA!5e0!3m2!1suk!2sua!4v1680441324068!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Lampa.map((block) => {
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

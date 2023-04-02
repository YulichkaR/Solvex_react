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
        "https://www.google.com/maps/dir//%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D1%86%D1%96%D1%8F-%D0%BC%D1%83%D0%B7%D0%B5%D0%B9+%22%D0%93%D0%B0%D1%81%D0%BE%D0%B2%D0%B0+%D0%BB%D1%8F%D0%BC%D0%BF%D0%B0%22/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x473add6d12fb2f95:0x9c5e7c27831bbfe3?sa=X&ved=2ahUKEwjF_ve5hIr-AhVOmIsKHZPBAD0Q9Rd6BAhzEAU",
    },
  ];

  return (
    <div>
      <Header />
      <div>
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

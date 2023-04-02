import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Valentino = () => {
  const Valentino = [
    {
      thirtyPagesTitle: "Валентино",
      differentImages: "thirty-pages-valentino",
      thirtyPagesText:
        "Розкішно. Витончено. Італійською - такий слоган нового ресторану італійської кухні Валентино. Ресторан розташований у старому будинку, у самому центрі міста, поряд із Площею Ринок.",
      thirtyPagesAddress: "м. Львів, вулиця Нижанківського, 20",
      thirtyPagesWorkTime: "08:00-22:00",
      thirtyPagesNumber: "+380 (32) 235 67 66",
      thirtyPagesLink: "https://valentino.lviv.ua/ru/",
      thirtyPagesInstagram: "https://www.instagram.com/valentino__restaurant/",
      thirtyPagesMap:
        "https://www.google.com/maps?q=%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD+%22%D0%92%D0%B0%D0%BB%D0%B5%D0%BD%D1%82%D0%B8%D0%BD%D0%BE%22&sxsrf=APwXEddPnp0TuSflQk0Yt2s763vmK9OVlQ:1680401916266&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIOCC4QrwEQxwEQgAQQ6gQyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIZCC4QrwEQxwEQgAQQ6gQQ3AQQ3QQQ4AQYAToHCCMQ6gIQJzoZCC4QrwEQxwEQgAQQ6gQQ3AQQ3gQQ4AQYAUoECEEYAFCYDFiYDGDbD2gCcAF4AIABZYgBZZIBAzAuMZgBAKABAaABArABCsABAdoBBggBEAEYFA&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjF2NGTkYr-AhXy-yoKHXRzAAMQ_AUoAnoECAEQBA",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Valentino.map((block) => {
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

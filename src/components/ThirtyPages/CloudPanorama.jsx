import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Cloud = () => {
  const Cloud = [
    {
      thirtyPagesTitle: "CLOUD no.7 Panorama",
      differentImages: "thirty-pages-cloud",
      thirtyPagesText:
        "Cloud no.7 Panorama — локація, що стане Вашим улюбленим місцем у самому центрі Львова! Романтична вечеря на панорамній терасі, День народження у колі друзів чи, навіть, грандіозне весілля — все можливо у Cloud no.7 Panorama. У меню CLOUDno.7 вишукані страви з усіх країн світу! А ще - масштабна винна карта від кращих сомельє та власна коктейльна лабораторія. Саме тому напої смакують по-особливому!",
      thirtyPagesAddress: "м. Львів, Соборна площа, 14",
      thirtyPagesWorkTime: "11:00-00:00",
      thirtyPagesNumber: "+380 (98) 111 00 07",
      thirtyPagesLink: "https://cloud7.com.ua/",
      thirtyPagesInstagram: "https://www.instagram.com/cloud.lviv/",
      thirtyPagesMap:
        "https://www.google.com/maps?q=CLOUD+no.7+Panorama&sxsrf=APwXEdfjciGTfIoshH8SCj6C9lF37S6ikA:1680397520709&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIOCC4QrwEQxwEQgAQQ6gQyBQgAEIAEMggIABCABBDLATIFCAAQgAQyBggAEBYQHjIGCAAQFhAeMgIIJjoZCC4QrwEQxwEQgAQQ6gQQ3AQQ3gQQ4AQYAUoECEEYAFAAWABg8AdoAHAAeACAAWiIAWiSAQMwLjGYAQCgAQKgAQHAAQHaAQYIARABGBQ&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjcg6X3gIr-AhVlAxAIHXliDaYQ_AUoAnoECAIQBA",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Cloud.map((block) => {
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

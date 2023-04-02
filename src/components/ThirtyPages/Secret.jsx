import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Secret = () => {
  const Secret = [
    {
      thirtyPagesTitle: "Secret Bar Lviv",
      differentImages: "thirty-pages-secret",
      thirtyPagesText:
        "Secret Bar Lviv - найкращий гастро-лаундж бар у Львові. Наш шеф-повар приготував для вас ідеально меню з різними позиціями, авторські бургери, брускети, закуски, пасти, салати, та багато іншого. Спробувавши якусь страву ви неодмінно захочете ще!",
      thirtyPagesAddress: "м. Львів, вулиця Миколи Коперника, 16",
      thirtyPagesWorkTime: "14:00-23:00",
      thirtyPagesNumber: "+380 (96) 996 9062",
      thirtyPagesLink: "https://www.secretbar.lviv.ua/",
      thirtyPagesInstagram: "https://www.instagram.com/secretbarlviv/",
      thirtyPagesMap:
        "https://www.google.com/maps?q=Secret+Bar+Lviv&sxsrf=APwXEdfLAvq_xfQKNE5aV3yVA0vN9QMCVg:1680400737326&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIOCC4QgAQQxwEQrwEQ6gQyBQgAEIAEMgUIABCABDIGCAAQFhAeMgIIJjIZCC4QgAQQxwEQrwEQ6gQQ3AQQ3gQQ4AQYAUoECEEYAFAAWABgpgNoAHAAeACAAWSIAWSSAQMwLjGYAQCgAQKgAQHAAQHaAQYIARABGBQ&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiTmomSjYr-AhXS_CoKHU2rDvwQ_AUoAnoECAIQBA",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Secret.map((block) => {
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

import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Friend = () => {
  const Friend = [
    {
      thirtyPagesTitle: "Добрий друг",
      differentImages: "thirty-pages-friend",
      thirtyPagesText:
        "Хочеш вишуканих мега маленьких аристократичних страв?  Нажаль, друже, не до Good Friend. У доброго друга подача нехай і авторська, але все просто та комфортно, а порції, вибач, величезні: ми ж друзі, тому все щедро.",
      thirtyPagesAddress: "м. Львів, вулиця Лесі Українки, 19",
      thirtyPagesWorkTime: "12:00-23:00",
      thirtyPagesNumber: "+380 (50) 537 12 46.",
      thirtyPagesLink: "https://www.goodfriend.net.ua/",
      thirtyPagesInstagram: "https://instagram.com/pubgoodfriend_lviv",
      thirtyPagesMap:
        "https://www.google.com/maps?q=%D0%94%D0%BE%D0%B1%D1%80%D0%B8%D0%B9+%D0%B4%D1%80%D1%83%D0%B3&sxsrf=APwXEddM7S95qgNWMbNEBoRoMU2sgw03qw:1680398559877&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIOCC4QrwEQxwEQgAQQ6gQyBQgAEIAEMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyCwguEK8BEMcBEIAEMgUIABCABDIFCAAQgAQ6GQguEK8BEMcBEIAEEOoEENwEEN4EEOAEGAFKBAhBGABQAFgAYN8EaABwAXgAgAFdiAFdkgEBMZgBAKABAqABAcABAdoBBggBEAEYFA&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjVw5OehYr-AhVixIsKHTGgAKMQ_AUoAXoECAIQAw",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Friend.map((block) => {
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

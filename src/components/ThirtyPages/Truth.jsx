import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Truth = () => {
  const Truth = [
    {
      thirtyPagesTitle: "Правда",
      differentImages: "thirty-pages-truth",
      thirtyPagesText:
        "Правду створено для того, щоб світове розмаїття сортів було і в Україні. Тому ми варимо широку палітру сортів — від класики до сауерів. Вважаємо, що кожне пиво базується передусім на технологічній досконалості і збалансованості, у якій першу скрипку грає робота наших маленьких партнерів — дріжджів, а ми їм тільки допомагаємо. І якщо закладено правильну основу, пиво не має дефектів і помарок, тоді у гру вступають екзотичні хмелі й інші спеції.",
      thirtyPagesAddress: "м. Львів, площа Ринок, 32",
      thirtyPagesWorkTime: "11:00-22:30",
      thirtyPagesNumber: "+380 (50) 374 49 86",
      thirtyPagesLink: "https://www.pravda.beer/",
      thirtyPagesInstagram: "https://www.instagram.com/pravdabeer/?hl=uk",
      thirtyPagesMap:
        "https://www.google.com/maps?q=%D0%A2%D0%B5%D0%B0%D1%82%D1%80+%D0%BF%D0%B8%D0%B2%D0%B0+%22%D0%9F%D1%80%D0%B0%D0%B2%D0%B4%D0%B0%22&sxsrf=APwXEdeZ94B0-uvte37h-KTKTL123NppHg:1680401273018&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyCwguEK8BEMcBEIAEMgUIABCABDILCC4QgAQQxwEQrwEyBQgAEIAEMgUIABCABDIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjICCCZKBAhBGABQAFgAYIwQaABwAXgAgAFniAFnkgEDMC4xmAEAoAECoAEBwAEB&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjK-8iBj4r-AhWQtYsKHTPdC-UQ_AUoAXoECAEQAw",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Truth.map((block) => {
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

import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Сhurchill = () => {
  const Сhurchill = [
    {
      thirtyPagesTitle: "Вінстона Черчілля",
      differentImages: "thirty-pages-churchill",
      thirtyPagesText:
        "У Галицькому районі Львова розташований атмосферний британський паб Winston Churchill Pub. В інтер'єрі чорно-червоні кольори, меблі з темних порід дерев, шкіряні дивани. Стіни прикрашені чорно-білими світлинами Вінстона Черчилля та пейзажами Великобританії.",
      thirtyPagesAddress: "м. Львів, вулиця Академіка Гнатюка, 4",
      thirtyPagesWorkTime: "12:00-00:00",
      thirtyPagesNumber: "+380 (68) 123 46 67",
      thirtyPagesLink: "https://www.facebook.com/WinstonChurchillPubLviv/",
      thirtyPagesInstagram: "https://www.instagram.com/winston_churchill_pub/",
      thirtyPagesMap:
        "https://www.google.com/maps?q=%D0%9F%D0%B0%D0%B1+%22%D0%92%D1%96%D0%BD%D1%81%D1%82%D0%BE%D0%BD%D0%B0+%D0%A7%D0%B5%D1%80%D1%87%D1%96%D0%BB%D0%BB%D1%8F%22&hotel_occupancy=2&sxsrf=APwXEdegYKWe4oGwE_B8BCr6YWTzgBAH6g:1680402442755&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIOCC4QgAQQxwEQrwEQ6gQyBggAEBYQHjIICAAQFhAeEAoyBggAEBYQHjICCCYyGQguEIAEEMcBEK8BEOoEENwEEN4EEOAEGAE6BwgjEOoCECdKBAhBGABQngtYngtg6xNoAnABeACAAZMBiAGTAZIBAzAuMZgBAKABAaABArABCsABAdoBBggBEAEYFA&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjqnq-Yk4r-AhVU6CoKHYCtBFYQ_AUoAXoECAEQAw",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Сhurchill.map((block) => {
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

import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Kantona = () => {
  const Kantona = [
    {
      thirtyPagesTitle: "Кантона",
      differentImages: "thirty-pages-kantona",
      thirtyPagesText:
        "На вулиці Джохара Дудаєва розташований тематичний футбольний паб під назвою «Cantona Pub». Інтер'єр закладу витриманий у класичному «барному» стилі – темно-зелені відтінки, цегляне мурування стін, масивні меблі з натурального дерева. Меню складається з популярних європейських, італійських й американських страв. Акцент зроблений на закусках до пива. У барі представлений асортимент розливного та пляшкового пива. Регулярно в закладі проходять трансляції футбольних матчів та спортивних подій.",
      thirtyPagesAddress: "м. Львів, вулиця Джохара Дудаєва, 16/1",
      thirtyPagesWorkTime: "14:00-22:45",
      thirtyPagesNumber: "+380 (96) 997 06 55",
      thirtyPagesLink: "https://www.facebook.com/CantonaPub",
      thirtyPagesInstagram: "https://www.instagram.com/kanatoba_laundzh/",
      thirtyPagesMap:
        "https://www.google.com/maps?q=%D0%BA%D0%B0%D0%BD%D1%82%D0%BE%D0%BD%D0%B0+%D0%BF%D0%B0%D0%B1&sxsrf=APwXEdfT2zju6IWgPVfQN0YPGga0xk3h9w:1680399849487&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMg4ILhCvARDHARCABBDqBDIFCAAQgAQyBQgAEIAEMgUILhCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIZCC4QrwEQxwEQgAQQ6gQQ3AQQ3QQQ4AQYAToKCAAQRxDWBBCwAzoZCC4QrwEQxwEQgAQQ6gQQ3AQQ3gQQ4AQYAUoECEEYAFDTC1jTC2DHIWgBcAF4AIABX4gBX5IBATGYAQCgAQHIAQjAAQHaAQYIARABGBQ&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj1hPijiYr-AhXo_CoKHUhwADUQ_AUoAXoECAEQAw",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Kantona.map((block) => {
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

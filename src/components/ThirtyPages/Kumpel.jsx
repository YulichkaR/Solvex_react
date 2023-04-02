import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Kumpel = () => {
  const Kumpel = [
    {
      thirtyPagesTitle: "Кумпель",
      differentImages: "thirty-pages-kumpel",
      thirtyPagesText:
        "Атмосфера ресторану створює всі умови, щоб відчути себе справжнім львівським батяром. На вході до закладу відвідувачів зустрічає легендарна «Пивна циця» - копія скульптури Венери Мілоської, і кожен бажаючий, правильно обласканий даму, отримає в подарунок стаканчик пива.",
      thirtyPagesAddress:
        "м. Львів, вулиця Володимира Винниченка, площа Митна, 6",
      thirtyPagesWorkTime: "10:00-22:00",
      thirtyPagesNumber: "+380 (68) 998 99 94",
      thirtyPagesLink: "https://kumpel-beer.com/pyvovarnya/",
      thirtyPagesInstagram: "https://www.instagram.com/kumpel_lviv/",
      thirtyPagesMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.1708830971174!2d24.0361306!3d49.8392466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6bef37f283%3A0x243d7f628f6bdd4f!2z0KDQtdGB0YLQvtGA0LDQvS3Qv9C40LLQvtCy0LDRgNC90Y8g0LzRltGB0YbQtdCy0L7RlyDQutGD0YXQvdGWINCa0YPQvNC_0LXQu9GM!5e0!3m2!1suk!2sua!4v1680441946631!5m2!1suk!2sua",
    },
  ];

  let havingAPhoho = false;
  return (
    <div>
      <Header havingAPhoho={havingAPhoho} />
      <div className="thirty-institution-page">
        {Kumpel.map((block) => {
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

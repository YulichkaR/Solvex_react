import React from "react";
import { PubsInstitutionsPages } from "./PubsInstitutionsPage";

export const TopPubsInstitution = () => {
  const TopPubsInstitution = [
    {
      pubIntitutionblock: "pub-page-friend",
      pubInstitutiontextblock: "pub-page-friend-image",
      pubInstitutionTitle: "Паб Добрий друг",
      pubIntitutionText: "м. Львів, вулиця Лесі Українки, 19",
      pubIntitutionNumber: "+380 (50) 537 12 46",
      whereToNavigate: "/friend",
    },
    {
      pubIntitutionblock: "pub-page-metro",
      pubInstitutiontextblock: "pub-page-metro-image",
      pubInstitutionTitle: "Метро-паб Станція Університетська",
      pubIntitutionText: "м. Львів, вулиця Січових Стрільців, 10",
      pubIntitutionNumber: "+380 (67) 476 49 75",
      whereToNavigate: "/metro",
    },
    {
      pubIntitutionblock: "pub-page-truth",
      pubInstitutiontextblock: "pub-page-truth-image",
      pubInstitutionTitle: "Театр пива Правда",
      pubIntitutionText: "м. Львів, площа Ринок, 32",
      pubIntitutionNumber: "+380 (50) 374 49 86",
      whereToNavigate: "/truth",
    },
    {
      pubIntitutionblock: "pub-page-cherry",
      pubInstitutiontextblock: "pub-page-cherry-image",
      pubInstitutionTitle: "Паб П'яна Вишня",
      pubIntitutionText: "м. Львів, вулиця Арсенальна, 3",
      pubIntitutionNumber: "+380 (67) 674 26 61",
      whereToNavigate: "/cherry",
    },
    {
      pubIntitutionblock: "pub-page-boat",
      pubInstitutiontextblock: "pub-page-boat-image",
      pubInstitutionTitle: "Пивний бар Човен",
      pubIntitutionText: "м. Львів, вулиця Вірменська, 33",
      pubIntitutionNumber: "+380 (68) 380 50 72",
      whereToNavigate: "/boat",
    },
    {
      pubIntitutionblock: "pub-page-renthen",
      pubInstitutiontextblock: "pub-page-renthen-image",
      pubInstitutionTitle: "Паб 100 Рентген",
      pubIntitutionText: "м. Львів, вулиця Петра Дорошенка, 50",
      pubIntitutionNumber: "+380 (98) 314 94 14",
      whereToNavigate: "/renthen",
    },
    {
      pubIntitutionblock: "pub-page-kantona",
      pubInstitutiontextblock: "pub-page-kantona-image",
      pubInstitutionTitle: "Паб Кантона",
      pubIntitutionText: "м. Львів, вулиця Джохара Дудаєва, 16/1",
      pubIntitutionNumber: "+380 (96) 997 06 55",
      whereToNavigate: "/kantona",
    },
    {
      pubIntitutionblock: "pub-page-winston",
      pubInstitutiontextblock: "pub-page-winston-image",
      pubInstitutionTitle: "Паб Вінстона Черчілля",
      pubIntitutionText: "м. Львів, вулиця Академіка Гнатюка, 4",
      pubIntitutionNumber: "+380 (68) 123 46 67",
      whereToNavigate: "/churchill",
    },
    {
      pubIntitutionblock: "pub-page-lion",
      pubInstitutiontextblock: "pub-page-lion-image",
      pubInstitutionTitle: "Паб Білий лев",
      pubIntitutionText: "м. Львів, вулиця Лесі Українки, 15",
      pubIntitutionNumber: "+380 (322) 35 46 25",
      whereToNavigate: "/lion",
    },
    {
      pubIntitutionblock: "pub-page-kumpel",
      pubInstitutiontextblock: "pub-page-kumpel-image",
      pubInstitutionTitle: "Ресторан-пивоварня Кумпель",
      pubIntitutionText:
        "м. Львів, вулиця Володимира Винниченка, площа Митна, 6",
      pubIntitutionNumber: "+380 (68) 998 99 94",
      whereToNavigate: "/kumpel",
    },
  ];

  return (
    <div className="pub-page">
      <p className="pub-page-main-text">
        Хочеш відпочити і отримати заряд позитивних емоцій?! Тоді тобі до міста
        Лева! Адже хороше пиво не тільки дарує гарний настрій, а й добре
        зігріває.
      </p>
      <div className="pub-line"></div>
      <div className="ten-pub">
        {TopPubsInstitution.map((block) => {
          return (
            <PubsInstitutionsPages
              pubIntitutionblock={block.pubIntitutionblock}
              pubInstitutiontextblock={block.pubInstitutiontextblock}
              pubInstitutionTitle={block.pubInstitutionTitle}
              pubIntitutionText={block.pubIntitutionText}
              pubIntitutionNumber={block.pubIntitutionNumber}
              whereToNavigate={block.whereToNavigate}
            />
          );
        })}
      </div>
    </div>
  );
};

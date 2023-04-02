import React from "react";
import { HookahsInstitutionsPages } from "./HookahsInstitutionsPage";

export const TopHookahsInstitution = () => {
  const TopHookahsInstitution = [
    {
      hookahIntitutionblock: "hookah-page-hashtad",
      hookahInstitutiontextblock: "hookah-page-hashtad-image",
      hookahInstitutionTitle: "HASHTAG LOUNGE BAR",
      hookahIntitutionText: "м. Львів, вулиця Галицька, 20",
      hookahIntitutionNumber: "+380 (98) 922 52 09",
      whereToNavigate: "/hashtag",
    },
    {
      hookahIntitutionblock: "hookah-page-chilling",
      hookahInstitutiontextblock: "hookah-page-chilling-image",
      hookahInstitutionTitle: "Кальян-бар Chilling",
      hookahIntitutionText: "м. Львів, проспект Свободи, 19",
      hookahIntitutionNumber: "+380 (50) 555 80 13",
      whereToNavigate: "/chilling",
    },
    {
      hookahIntitutionblock: "hookah-page-secret",
      hookahInstitutiontextblock: "hookah-page-secret-image",
      hookahInstitutionTitle: "Secret Bar Lviv",
      hookahIntitutionText: "м. Львів, вулиця Миколи Коперника, 16",
      hookahIntitutionNumber: "+380 (96) 996 90 62",
      whereToNavigate: "/secret",
    },
    {
      hookahIntitutionblock: "hookah-page-purple",
      hookahInstitutiontextblock: "hookah-page-purple-image",
      hookahInstitutionTitle: "Purple Lounge",
      hookahIntitutionText: "м. Львів, вулиця Леся Курбаса, 8",
      hookahIntitutionNumber: "+380 (73) 600 33 31",
      whereToNavigate: "/purple",
    },
    {
      hookahIntitutionblock: "hookah-page-1001",
      hookahInstitutiontextblock: "hookah-page-1001-image",
      hookahInstitutionTitle: "Кальян-бар 1000+1 ніч",
      hookahIntitutionText: "м. Львів, вулиця Братів Рогатинців, 19",
      hookahIntitutionNumber: "+380 (32) 297 03 48",
      whereToNavigate: "/night",
    },
    {
      hookahIntitutionblock: "hookah-page-filin",
      hookahInstitutiontextblock: "hookah-page-filin-image",
      hookahInstitutionTitle: "FILIN lounge bar",
      hookahIntitutionText: "м. Львів, вулиця Січових Стрільців, 12",
      hookahIntitutionNumber: "+380 (93) 360 24 86",
      whereToNavigate: "/filin",
    },
    {
      hookahIntitutionblock: "hookah-page-bowl",
      hookahInstitutiontextblock: "hookah-page-bowl-image",
      hookahInstitutionTitle: "Кальян-бар Гаряча чаша",
      hookahIntitutionText: "м. Львів, вулиця Руська, 4",
      hookahIntitutionNumber: "+380 (97) 961 04 40",
      whereToNavigate: "/hotbowl",
    },
    {
      hookahIntitutionblock: "hookah-page-amsterdam",
      hookahInstitutiontextblock: "hookah-page-amsterdam-image",
      hookahInstitutionTitle: "Amsterdam Lounge Bar",
      hookahIntitutionText: "м. Львів, вулиця Валова, 15",
      hookahIntitutionNumber: "+380 (67) 976 09 86",
      whereToNavigate: "/amsterdam",
    },
    {
      hookahIntitutionblock: "hookah-page-depo",
      hookahInstitutiontextblock: "hookah-page-depo-image",
      hookahInstitutionTitle: "Depo Lounge",
      hookahIntitutionText: "м. Львів,  вулиця Героїв Майдану, 10-12",
      hookahIntitutionNumber: "+380 (68) 535 89 37",
      whereToNavigate: "/depo",
    },
    {
      hookahIntitutionblock: "hookah-page-sunset",
      hookahInstitutiontextblock: "hookah-page-sunset-image",
      hookahInstitutionTitle: "Sunset Lounge Bar",
      hookahIntitutionText: "м. Львів, вулиця Газова, 26",
      hookahIntitutionNumber: "+380 (50) 801 55 39",
      whereToNavigate: "/sunset",
    },
  ];

  return (
    <div className="hookah-page">
      <p className="hookah-page-main-text">
        Бажаєш релакснути з димком під кінець робочого дня, чи почілити з
        друзями?! Тож ми пропонуємо тобі кращі кальянні культурної столиці
        України!
      </p>
      <div className="hookah-line"></div>
      <div className="ten-hookah">
        {TopHookahsInstitution.map((block) => {
          return (
            <HookahsInstitutionsPages
              hookahIntitutionblock={block.hookahIntitutionblock}
              hookahInstitutiontextblock={block.hookahInstitutiontextblock}
              hookahInstitutionTitle={block.hookahInstitutionTitle}
              hookahIntitutionText={block.hookahIntitutionText}
              hookahIntitutionNumber={block.hookahIntitutionNumber}
              whereToNavigate={block.whereToNavigate}
            />
          );
        })}
      </div>
    </div>
  );
};

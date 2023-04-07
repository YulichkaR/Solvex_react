import React from "react";
import { MemberDescription } from "./MemberDescription/MemberDescription";
import Julia from "../../../img/image-7.png";
import Solomia from "../../../img/image-6.png";
import Nazar from "../../../img/image-16.png";
import Valeryi from "../../../img/image-8.png";
import Sofia from "../../../img/Sofiaaa.png";
import Sviatoslav from "../../../img/image-9.png";

export const TeamDescription = () => {
  const TeamDescriptionStore = [
    {
      memberImage: Julia,
      memberText:
        "Привіт! Я студентка Львівського Національного університету імені І.Франка факультетуприкладної математики таінформатики. Ще 3 місяці тому я оприділилась з напрямком - Front-end web development. З того часу ястаранно розвиваюсьу цій сфері.",
      memberProfesion: "Team Lead, Front-end developer, Web/UI/UX",
    },
    {
      memberImage: Valeryi,
      memberText:
        "Хелоу! Мене звати Валєра і я один з учасників проекту. Сам я народився і виріс у сотні кілометрах від культурної столиці, проте моє бажання перебратися до Львова було доволі високе, тому по закінченню школи я вступив до Львівського Національного університету імені І.Франка факультету прикладної математики та інформатики.Люблю спорт і пиво, а ще ненавиджу русню, дякую за увагу!",
      memberProfesion: "Back-end developer, Web/UI/UX",
    },
    {
      memberImage: Solomia,
      memberText:
        "Всім привіт! Я студентка другого курсу, навчаюсь у Львівському національному університеті імені І. Франка на факультеті прикладнаї математики та інформатики. Нещодавно зрозуміла, що Front-end web development це те чим хотіла б займатись. Готова працювати в команді, щоб поділитись своїми знаннями з іншими і також дізнатись щось нове і корисне для себе.",
      memberProfesion: "Front-end developer, Web/UI/UX",
    },
    {
      memberImage: Nazar,
      memberText:
        "Ку! Я Назар і я з Рівного! Навчаюсь на 2 курсі львівського національному університеті імені І. Франка на факультеті прикладнаї математики та інформатики.  P.S.(я той що вищий) ",
      memberProfesion: "Back-end developer",
    },
    {
      memberImage: Sofia,
      memberText:
        "Привіт! Front-end та web моя стихія. Навчаюся на факультеті прикладної математики та інформатики в ЛНУ ім. Франка. Мрію створювати красиве, сучасне та унікальне!",
      memberProfesion: "Front-end developer, Web/UI/UX",
    },
    {
      memberImage: Sviatoslav,
      memberText:
        "           Життя — цікаве. І мотивація — то є сильна. Філософія, психологія. Найголовніше — залишайтесь людьми і кричіть, що ви живі. «Я ЖИ-ВИЙ!»",
      memberProfesion: "Full Stack",
    },
  ];
  let isPhotoLeft = false;
  return (
    <div>
      {TeamDescriptionStore.map((member) => {
        isPhotoLeft = !isPhotoLeft;

        return (
          <MemberDescription
            isPhotoLeft={isPhotoLeft}
            memberImage={member.memberImage}
            memberText={member.memberText}
            memberProffesion={member.memberProfesion}
          />
        );
      })}
    </div>
  );
};

import React from "react";
import { Card } from "./Card";
import Warsava from "../../../../img/Warsava.png";
import Valentino from "../../../../img/Valentino.png";
import Star from "../../../../img/Star.png";

export const RestaurantCards = () => {
  const RestaurantCards = [
    {
      cardClass: "restaurant-warsava",
      cardTitle: "Ресторан «Варшава»",
      cardImage: { src: Warsava, alt: "Warsava" },
      cardDescription:
        "Тут гості зможуть поснідати, пообідати чи повечеряти насолоджуючись більш ніж 200-ми видами страв середземноморської та національної кухні за оригінальними рецептами від шеф-кухара. Унікальна колекція найкращих вин Італії, Франції, Чилі, Грузії та України доповнить кулінарну нотувитонченим смаком.",
      workTime: "🥗 Restaurant:  ⏱08:00 - 23:00 ",
      cardNumber: "+380 (97)203 10 20",
      cardAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.5986428257656!2d24.055922615631406!3d49.88756337940166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473adc8bdb83dbdb%3A0x1d1ce4d4934e75f5!2z0JPQvtGC0LXQu9GMLdGA0LXRgdGC0L7RgNCw0L0g0JLQsNGA0YjQsNCy0LAgKFdhcnN6YXdhKQ!5e0!3m2!1suk!2sua!4v1677974328282!5m2!1suk!2sua",
    },
    {
      cardClass: "restaurant-valentino",
      cardTitle: "Ресторан «Валентино»",
      cardImage: { src: Valentino, alt: "Valentino" },
      cardDescription:
        "Про ресторан італійської кухні «Валентино» у Львові можна сказати словами Оскара Уайльда: «Смак мовчазний». Це твердження справедливе для елітного ресторану, що ідеально вписався в атмосферу вузенької львівської вулички і передає шарм та грацію Італії",
      workTime: "🥗 Restaurant:  ⏱08:00–22:00",
      cardNumber: "+380 (32) 235 67 66",
      cardAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.2423074565095!2d24.03003851576911!3d49.83790447939555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add692ceaa9f5%3A0xd93b3b001c1cf02e!2z0JLQsNC70LXQvdGC0LjQvdC-IChWYWxlbnRpbm8gcmVzdGF1cmFudCk!5e0!3m2!1suk!2sua!4v1677976810789!5m2!1suk!2sua",
    },
    {
      cardClass: "restaurant-star",
      cardTitle: "Аптека Іонових «Під золотою зіркою» ",
      cardImage: { src: Star, alt: "Under Gold Star" },
      cardDescription:
        "Естетика в кожній лінії інтер'єру, поєднання кольорів, історичного минулого кондитерської аптеки додає закладу особливої атмосферию Цінні експонати інтерактивного музею – це відреставровані меблі і оригінальні постери",
      workTime: "🥗 Restaurant:  ⏱08:00–22:00",
      cardNumber: " +380 (97) 235 67 77",
      cardAddress:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.175982480941!2d24.026220815769218!3d49.83915077939564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6e69655555%3A0x3f1d361a3dba1a0d!2z0JrQvtC90LTQuNGC0LXRgNGB0YzQutCwLdCw0L_RgtC10LrQsCDQhtC-0L3QvtCy0LjRhSDQn9GW0LQg0LfQvtC70L7RgtC-0Y4g0LfRltGA0LrQvtGO!5e0!3m2!1suk!2sua!4v1677977337929!5m2!1suk!2sua",
    },
  ];

  return (
    <div className="main-page-restaurant-section">
      <p className="main-page-restaurant-text-description">
        Ресторани Львова – серед розмаїття кухонь і концептів як вибрати саме
        той?..Пандемія 2020-2021 років поставила ресторани у Львові (та і по
        всьому світу) в надзвичайні умови, тому, на превеликий жаль, багато
        чудових закладів змушені були припинити свою діяльність. Проте, не
        зважаючи на всі труднощі, більшість ресторанів у Львові продовжують
        працювати, знаходячи все нові способи зацікавити та задовольнити свого
        Гостя.
      </p>
      <div className="main-page-three-cards-of-restaurants">
        {RestaurantCards.map((card) => {
          return (
            <Card
              cardClass={card.cardClass}
              cardTitle={card.cardTitle}
              cardImage={card.cardImage}
              cardDescription={card.cardDescription}
              workTime={card.workTime}
              cardNumber={card.cardNumber}
              cardAddress={card.cardAddress}
            />
          );
        })}
      </div>
    </div>
  );
};

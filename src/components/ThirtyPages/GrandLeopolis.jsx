import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Leopolis = () => {
  const Leopolis = [
    {
      thirtyPagesTitle: "Grand Cafe Leopolis",
      differentImages: "thirty-pages-leopolis",
      thirtyPagesText:
        "Тут можна дізнатися про цікавинки й події, які ставалися у Львові відтоді, як люди навчилися фотографувати. Про лижний трамплін на Знесінні, про страйки, канатну дорогу у Стрийському парку, перші польоти й інші пригоди нашого міста розповідають близько 700 фотографій на стінах Grand Cafe Leopolis.",
      thirtyPagesAddress: "м. Львів, площа Ринок, 1",
      thirtyPagesWorkTime: "09:00-22:30",
      thirtyPagesNumber: "+380 (97) 997 55 65",
      thirtyPagesLink:
        "https://www.fest.lviv.ua/uk/restaurants/grandcafeleopolis/",
      thirtyPagesInstagram: "https://www.instagram.com/grandcafeleopolis/",
      thirtyPagesMap:
        "https://www.google.com/maps?q=Grand+Cafe+Leopolis&sxsrf=APwXEdfWlMl4vTaTJfgkvKytVpc9ISh4sQ:1680398770041&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIOCC4QrwEQxwEQgAQQ6gQyCAgAEIAEEMsBMggIABCABBDLATIFCAAQgAQyBQgAEIAEMgUIABCABDIZCC4QrwEQxwEQgAQQ6gQQ3AQQ3gQQ4AQYAUoECEEYAFAAWABg3AhoAHABeACAAWKIAWKSAQExmAEAoAECoAEBwAEB2gEGCAEQARgU&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj6rc34hYr-AhUVzosKHYieBf4Q_AUoAnoECAEQBA",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Leopolis.map((block) => {
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

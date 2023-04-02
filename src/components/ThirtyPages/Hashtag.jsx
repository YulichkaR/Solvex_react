import React from "react";
import { ExamplePage } from "./ExamplePage";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Header/Footer";
export const Hashtag = () => {
  const Hashtag = [
    {
      thirtyPagesTitle: "HASHTAG LOUNGE BAR",
      differentImages: "thirty-pages-hashtag",
      thirtyPagesText:
        "#Hashtag Lounge Bar – це душевне місце із затишною атмосферою, димними кальянами, чудовою кухнею і баром в самому центрі нашого міста.",
      thirtyPagesAddress: "м. Львів, вулиця Галицька, 20",
      thirtyPagesWorkTime: "11:00-23:00",
      thirtyPagesNumber: "+380 (98) 922 52 09",
      thirtyPagesLink: "https://hashtag-bar.com.ua/",
      thirtyPagesInstagram: "https://www.instagram.com/hashtag_lviv/",
      thirtyPagesMap:
        "https://www.google.com/maps?q=hashtag+lounge+bar&sxsrf=APwXEdeuc25C3p7HqQdD3dyJpeste3uhYA:1680399106480&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMg4ILhCABBDHARCvARDqBDIFCAAQgAQyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yGQguEIAEEMcBEK8BEOoEENwEEN4EEOAEGAFKBAhBGABQAFgAYKoMaABwAXgAgAFiiAFikgEBMZgBAKABAqABAcABAdoBBggBEAEYFA&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjgwZXph4r-AhWTuosKHf9pCI0Q_AUoAnoECAIQBA",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        {Hashtag.map((block) => {
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

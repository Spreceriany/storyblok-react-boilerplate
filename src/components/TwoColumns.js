import { storyblokEditable } from "@storyblok/react";
import { StoryblokComponent } from "@storyblok/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const TwoColumns = ({ blok }) => {
  return (
    <div
      className={` two-column pl-8 pr-8 flex flex-col md:flex-row md:items-center h-screen gap-6 pt-20 md:pt-0 ${
        blok.roundImage ? " pr-8 max-w-7xl mx-auto" : " md:pr-0"
      } `}
    >
      <div className="flex flex-col flex-1 flex- md:w-[40%]">
        <div {...storyblokEditable(blok)} className="grid">
          {blok.leftColumn.map((blok) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))}
        </div>
      </div>
      <div
        className={`h-full flex ${blok.roundImage ? " items-center" : ""} `}
        {...storyblokEditable(blok)}
      >
        <LazyLoadImage
          className={` image m-auto block  max-h-full w-auto max-w-full object-fit ${
            blok.roundImage
              ? " rounded-[50%] flex items-center h-1/2"
              : " md:h-full"
          } `}
          effect="blur"
          alt={blok.rightColumn?.filename + "/m/"}
          src={blok.rightColumn?.filename + "/m/"} // use normal <img> attributes as props
        />
      </div>
    </div>
  );
};

export default TwoColumns;

import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
const Images = ({ blok }) => {
  console.log(blok);
  return (
    <div
      style={{ display: "flex", justifyContent: "space-around" }}
      {...storyblokEditable(blok)}
      className="grid"
    >
      <div id="photos">
        {blok.images.map((image) => {
          return (
            <img
              alt={blok.image?.filename + "/m/"}
              src={blok.image?.filename + "/m/"}
              loading="lazy"
            />
            // <LazyLoadImage
            //   effect="opacity"
            //   alt={image.filename + "/m/"}
            //   src={image.filename + "/m/"} // use normal <img> attributes as props
            // />
          );
        })}
      </div>
    </div>
  );
};

export default Images;

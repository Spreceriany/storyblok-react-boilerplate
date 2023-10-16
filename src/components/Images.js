import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Images = ({ blok }) => {
  console.log(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <div id="photos">
        {blok.images.map((image) => {
          return (
            <LazyLoadImage
              width={600}
              height={400}
              threshold={500}
              key={image.filename}
              alt={image.filename + "/m/"}
              src={image.filename + "/m/"} // use normal <img> attributes as props
            />
          );
        })}
      </div>
    </div>
  );
};

export default Images;

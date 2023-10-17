import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Images = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className=" grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {blok.images.map((image) => {
          return (
            <LazyLoadImage
              width={image.filename.split("/")[5].split("x")[0]}
              height={image.filename.split("/")[5].split("x")[1]}
              effect="blur"
              className=" object-cover h-full"
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

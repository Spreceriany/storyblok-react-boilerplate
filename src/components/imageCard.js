import { storyblokEditable } from "@storyblok/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function imageCard({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="column feature img relative  hover:md:scale-125 hover:z-40 transition-all"
    >
      <LazyLoadImage
        effect="blur"
        alt={blok.image?.filename}
        src={blok.image?.filename} // use normal <img> attributes as props
      />
      <p className=" transition-all duration-200 absolute translate-y-2 bottom-4 left-4 text-2xl md:text-4xl font-bold opacity-0 title-card z-10 ">
        {" "}
        {blok.title}
      </p>
    </div>
  );
}

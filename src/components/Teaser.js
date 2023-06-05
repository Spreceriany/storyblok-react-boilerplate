import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Teaser = ({ blok }) => {
  return (
    <h2
      className="teaser  flex items-center justify-center"
      {...storyblokEditable(blok)}
    >
      {render(blok.headline)}
    </h2>
  );
};

export default Teaser;

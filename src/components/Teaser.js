import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <h2
      className="teaser"
      style={{ textAlign: "center" }}
      {...storyblokEditable(blok)}
    >
      {blok.headline}
    </h2>
  );
};

export default Teaser;

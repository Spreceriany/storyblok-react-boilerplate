import { storyblokEditable } from "@storyblok/react";

export default function Feature({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="column feature">
      <img src={blok.image?.filename} />
      {blok.name}
    </div>
  );
}

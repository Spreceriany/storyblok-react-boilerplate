import { useStoryblok, StoryblokComponent } from "@storyblok/react";

const Gallery = ({ blok }) => {
  console.log(blok);
  document.body.style.overflow = "auto";
  return (
    <>
      <div className=" pt-20 md:pt-10 px-8">
        <div>
          {blok.images.map((blok) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;

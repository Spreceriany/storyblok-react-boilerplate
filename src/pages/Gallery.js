import { useStoryblok, StoryblokComponent } from "@storyblok/react";

const Gallery = ({ blok }) => {
  console.log(blok);
  document.body.style.overflow = "auto";
  return (
    <>
      <div className=" pt-20 md:pt-10 pl-2 pr-6 md:pl-2 md:pr-20 ">
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

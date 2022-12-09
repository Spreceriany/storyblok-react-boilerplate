import { useStoryblok, StoryblokComponent } from "@storyblok/react";

const Gallery = ({ blok }) => {
  console.log(blok);
  document.body.style.overflow = "auto";
  return (
    <>
      <div className=" pt-20 md:pt-10 px-8">
        {blok.images
          .filter((blk) => blk.component === "teaser")
          .map((filteredPerson) => (
            <StoryblokComponent
              blok={filteredPerson}
              key={filteredPerson._uid}
            />
          ))}
        <div>
          <div id="photos">
            {blok.images.map((blok) => (
              <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Images = ({ blok }) => {
  console.log(blok);

  const images = blok.images;
  const photosContainer = document.getElementById("photos");

  images.forEach((image, index) => {
    const img = new Image();
    img.src = image.filename + "/m/";
    img.alt = image.filename + "/m/";

    img.onload = () => {
      // Append the image to the container when it's loaded
      photosContainer.appendChild(img);

      // Preload the next image
      const nextIndex = index + 1;
      if (nextIndex < images.length) {
        preloadImage(images[nextIndex]);
      }
    };
  });

  // Preload the first image
  preloadImage(images[0]);

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around" }}
      {...storyblokEditable(blok)}
      className="grid"
    >
      <div id="photos">
        {/* {blok.images.map((image) => {
          return (
            <img
              alt={image.filename + "/m/"}
              src={image.filename + "/m/"}
              loading="lazy"
            />
            // <LazyLoadImage
            //   effect="opacity"
            //   alt={image.filename + "/m/"}
            //   src={image.filename + "/m/"} // use normal <img> attributes as props
            // />
          );
        })} */}
      </div>
    </div>
  );
};

export default Images;

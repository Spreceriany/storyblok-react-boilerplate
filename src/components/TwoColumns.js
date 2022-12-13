import { storyblokEditable } from "@storyblok/react";
import { StoryblokComponent } from "@storyblok/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const TwoColumns = ({ blok }) => {
  return (
    <div
      className={` two-column pl-8 pr-8 flex flex-col md:flex-row md:items-center h-screen gap-6 pt-20 md:pt-0 ${
        blok.roundImage ? " pr-8 max-w-7xl mx-auto" : " md:pr-0"
      } `}
    >
      <div className="flex contact-bloks flex-col flex-1 flex- md:w-[40%]">
        <div {...storyblokEditable(blok)} className="grid">
          {blok.leftColumn.map((blok) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))}
        </div>
      </div>
      <div className="contact-wrap hidden  flex-col flex-1 flex- md:w-[40%]">
        <p className="velkyText font-bold mb-4">Need help?</p>
        <p>Need help?</p>
        <p>Don't be shy to reach out!</p>
        <br />
        <div className=" font-bold">
          <span> Monday - Friday</span>
          <span className=" ml-8 md:ml-20"> 8am to 5pm CET</span>
        </div>
        <div className=" font-bold">
          <span> Saturday</span>
          <span className=" ml-[5.75rem] md:ml-[8.75rem]"> 8am to 2pm CET</span>
        </div>
        <br />
        (Although I am trying to be here 24/7)
        <p>
          For more inquiry{" "}
          <a
            href="mailto:service@adjutor.world"
            className="cyan"
            target="_blank"
          >
            {" "}
            service@adjutor.world
          </a>
        </p>
      </div>
      <div
        className={`h-full flex ${blok.roundImage ? " items-center" : ""} `}
        {...storyblokEditable(blok)}
      >
        <LazyLoadImage
          className={` image m-auto block  max-h-full w-auto max-w-full object-fit ${
            blok.roundImage
              ? " rounded-[50%] flex items-center h-1/2"
              : " md:h-full"
          } `}
          effect="blur"
          alt={blok.rightColumn?.filename + "/m/"}
          src={blok.rightColumn?.filename + "/m/"} // use normal <img> attributes as props
        />
      </div>
    </div>
  );
};

export default TwoColumns;

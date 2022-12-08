import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = ({ blok }) => {
  console.log(blok);
  return (
    <div className="pl-8 flex items-center h-screen gap-6 ">
      <div className="flex flex-col flex-1 flex- w-[40%]">
        <h2
          {...storyblokEditable(blok)}
          className="text-3xl md:text-5xl  mb-4 font-black"
        >
          {render(blok.title)}
        </h2>
        <div className="flex flex-col flex-1  w-[100%]">
          <p {...storyblokEditable(blok)} className="max-w-[500px] mb-4">
            {blok.description}
          </p>
          <div className="flex mt-4  font-black gap-6 text-2xl ">
            <div className="flex flex-col md:justify-center md:items-center gap-4">
              <p {...storyblokEditable(blok)}> {blok.number1}</p>
              <p {...storyblokEditable(blok)}> {blok.feature1}</p>
            </div>
            <div className="flex flex-col md:justify-center md:items-center gap-4">
              <p {...storyblokEditable(blok)}> {blok.number2}</p>
              <p {...storyblokEditable(blok)}> {blok.feature2}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex">
        <LazyLoadImage
          className=" m-auto hidden md:block h-auto max-h-full w-auto max-w-full ] object-fit "
          effect="blur"
          alt={blok.image?.filename}
          src={blok.image?.filename}
        />
      </div>
    </div>
  );
};

export default Home;

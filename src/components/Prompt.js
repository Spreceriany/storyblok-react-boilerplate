import React from "react";
import Typed from "react-typed";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Prompt = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="text-box">
        <Typed
          strings={[
            "prompting is fun",
            "prompting is fast",
            "prompting is future",
            "welcome to",
            "prompt engineering",
          ]}
          typeSpeed={25}
          backSpeed={50}
          backDelay={500}
          startDelay={1000}
          loop={false}
          attr=""
        />
      </div>
    </div>
  );
};

export default Prompt;

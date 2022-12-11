import { useStoryblok, StoryblokComponent } from "@storyblok/react";

const About = ({ blok }) => {
  console.log(blok.content);

  return (
    <>
      <div className="min-h-screen about">
        <StoryblokComponent blok={blok.content[0]} />
      </div>
    </>
  );
};

export default About;

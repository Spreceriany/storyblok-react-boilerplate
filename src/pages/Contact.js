import { useStoryblok, StoryblokComponent } from "@storyblok/react";

const Contact = ({ blok }) => {
  return (
    <>
      <div className="min-h-screen">
        <StoryblokComponent blok={blok.content[0]} />
      </div>
    </>
  );
};

export default Contact;

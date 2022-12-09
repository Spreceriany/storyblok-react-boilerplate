import { useStoryblok, StoryblokComponent } from "@storyblok/react";

export default function Contact() {
  let slug =
    window.location.pathname === "/contact"
      ? "contact"
      : window.location.pathname.replace("/", "");
  const story = useStoryblok(slug, { version: "draft" });
  if (!story || !story.content) {
    return;
  }

  return (
    <>
      <div className="w-full">
        <StoryblokComponent blok={story.content} />
      </div>
    </>
  );
}

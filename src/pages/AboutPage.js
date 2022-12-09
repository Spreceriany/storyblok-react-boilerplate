import { useStoryblok, StoryblokComponent } from "@storyblok/react";

export default function AboutPage() {
  let slug =
    window.location.pathname === "/about"
      ? "about"
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

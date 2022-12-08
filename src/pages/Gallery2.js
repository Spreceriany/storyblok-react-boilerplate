import { useStoryblok, StoryblokComponent } from "@storyblok/react";

export default function Gallery2() {
  let slug =
    window.location.pathname === "/gallery"
      ? "gallery"
      : window.location.pathname.replace("/", "");
  document.body.style.overflow = "hidden";
  const story = useStoryblok(slug, { version: "draft" });
  if (!story || !story.content) {
    return;
  }

  console.log(story.content);

  return (
    <>
      <div className="w-full">
        <StoryblokComponent blok={story.content} />
      </div>
    </>
  );
}

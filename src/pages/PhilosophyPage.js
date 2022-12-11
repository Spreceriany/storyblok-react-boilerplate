import { useStoryblok, StoryblokComponent } from "@storyblok/react";

export default function PhilosophyPage() {
  let slug =
    window.location.pathname === "/philosophy"
      ? "philosophy"
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

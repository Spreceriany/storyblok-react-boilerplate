import { useStoryblok, StoryblokComponent } from "@storyblok/react";

export default function FaqPage() {
  let slug =
    window.location.pathname === "/faq"
      ? "faq"
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

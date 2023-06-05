import {
  useStoryblok,
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";
import { NavLink } from "react-router-dom";

export default function Blogs() {
  let slug =
    window.location.pathname === "/blogs"
      ? "blogs"
      : window.location.pathname.replace("/", "");
  const story = useStoryblok(slug, { version: "draft" });

  if (!story || !story.content) {
    return;
  }

  console.log(story);

  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center flex-col mx-auto container">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
          {story.content.blogy.map((el) => {
            return (
              <NavLink
                className=" flex flex-col"
                to={el.link.cached_url}
                key={el.description}
                end
              >
                <img src={el.image.filename} alt="" />
                {el.description}
                {el.title}
              </NavLink>
            );
          })}
        </div>
        {/* <StoryblokComponent blok={story.content} /> */}
      </div>
    </>
  );
}

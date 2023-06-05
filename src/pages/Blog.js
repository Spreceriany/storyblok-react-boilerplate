import {
  useStoryblok,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
const Blog = ({ blok }) => {
  const getArticles = async () => {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories`, {
      version: "draft", // or 'published'
      starts_with: "blog/",
      is_startpage: false,
    });

    console.log(data);
  };

  return (
    <>
      <div className="min-h-screen blog">
        {blok.conttent.blogy.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
        <StoryblokComponent blok={blok.content[0]} />
      </div>
    </>
  );
};

export default Blog;

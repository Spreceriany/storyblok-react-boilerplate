import { storyblokEditable } from "@storyblok/react";

const Table = ({ blok }) => {
  console.log(blok);
  return <div {...storyblokEditable}></div>;
};

export default Table;

import React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";

const Text = ({ blok }) => {
  return (
    <div
      key={blok._uid}
      {...storyblokEditable(blok)}
      className="container mx-auto"
    >
      {blok.content}
    </div>
  );
};

export default Text;

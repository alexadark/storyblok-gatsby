import React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";

const Feature = ({ blok }) => {
  return (
    <h3
      className="font-bold text-lg text-center"
      key={blok._uid}
      {...storyblokEditable(blok)}
    >
      {blok.name}
    </h3>
  );
};

export default Feature;

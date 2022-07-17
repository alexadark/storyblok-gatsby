import * as React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";

const Teaser = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="p-10 rounded-2xl bg-gradient-to-tr from-teal-600 to-purple-300 max-w-md mx-auto"
    >
      <h1 className=" text-center uppercase text-xl text-white font-bold">
        {blok.headline}
      </h1>
    </div>
  );
};

export default Teaser;

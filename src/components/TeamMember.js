import React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TeamMember = ({ blok }) => {
  const image = getImage(blok.picture.filename);

  return (
    <div key={blok._uid} {...storyblokEditable(blok)}>
      <img
        src={blok.picture.filename}
        className="w-[100px] aspect-square rounded-full mx-auto mb-10"
      />
      <h3 className="mb-3 text-lg font-bold text-center">{blok.name}</h3>
      <p className="text-center">{blok.bio}</p>
    </div>
  );
};

export default TeamMember;

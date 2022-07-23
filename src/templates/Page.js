import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import {
  useStoryblokState,
  StoryblokComponent,
  storyblokEditable,
} from "gatsby-source-storyblok";

const StoryblokEntry = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);
  console.log(story);

  const components = story.content.body?.map((blok) => (
    <StoryblokComponent blok={blok} key={blok._uid} />
  ));

  return (
    <Layout>
      <div {...storyblokEditable(story.content)}>
        <h1>{story.name}</h1>
        {components}
      </div>
    </Layout>
  );
};

export default StoryblokEntry;

export const query = graphql`
  query ($full_slug: String!) {
    storyblokEntry(full_slug: { eq: $full_slug }) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`;

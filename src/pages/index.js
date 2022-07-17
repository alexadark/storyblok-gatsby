import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { useStoryblokState } from "gatsby-source-storyblok";

// markup
const IndexPage = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);
  console.log(story);

  return (
    <Layout>
      <h1>{story.name}</h1>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "home" }) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`;

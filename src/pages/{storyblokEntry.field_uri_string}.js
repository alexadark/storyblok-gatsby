import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import {
  useStoryblokState,
  StoryblokComponent,
  storyblokEditable,
} from "gatsby-source-storyblok";

const StoryblokEntry = (props) => {
  // let story = data.storyblokEntry;
  // story = useStoryblokState(story);
  // console.log(story);

  // const components = story.content.body?.map((blok) => (
  //   <StoryblokComponent blok={blok} key={blok._uid} />
  // ));
  console.log(props);

  return (
    <Layout>
      {/* <div {...storyblokEditable(story.content)}>
        <h1>{story.name}</h1>
        {components}
      </div> */}
      <h1>hello</h1>
    </Layout>
  );
};

export default StoryblokEntry;

export const query = graphql`
  query ($uri: String!) {
    storyblokEntry(field_uri_string: { eq: $uri }) {
      content
      name
      full_slug
      field_uri_string
      uuid
      id
      internalId
    }
  }
`;

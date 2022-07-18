import React from "react";
import Header from "./Header";
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok";
import configuration from "../../gatsby-config";
import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";
import TeamMember from "./TeamMember";
import Text from "./Text";

const sbConfig = configuration.plugins.find(
  (plugin) => plugin.resolve === "gatsby-source-storyblok"
);

storyblokInit({
  accessToken: sbConfig.options.accessToken,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    team_member: TeamMember,
    text: Text,
  },
});

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

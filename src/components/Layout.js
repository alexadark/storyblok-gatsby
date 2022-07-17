import React from "react";
import Header from "./Header";
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok";
import configuration from "../../gatsby-config";

const sbConfig = configuration.plugins.find(
  (plugin) => plugin.resolve === "gatsby-source-storyblok"
);

storyblokInit({
  accessToken: sbConfig.options.accessToken,
  use: [apiPlugin],
  components: {
    //components
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

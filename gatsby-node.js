const path = require(`path`);
const pageTemplate = path.resolve(`./src/templates/page.js`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allStoryblokEntry {
        nodes {
          full_slug
        }
      }
    }
  `);

  const pages = result.data.allStoryblokEntry.nodes;

  pages.map(({ full_slug }) => {
    const path = full_slug === "home" ? "/" : `/${full_slug}`;
    createPage({
      path,
      component: pageTemplate,
      context: {
        full_slug,
      },
    });
  });
};

const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const htmlmin = require("html-minifier");

const MARKDOWN_OPTIONS = {
  html: true,
  xhtmlOut: true,
  linkify: true,
  typographer: true,
  breaks: true
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("full", "layouts/full.njk");
  eleventyConfig.addLayoutAlias("question", "layouts/question.njk");

  // Set Markdown library
  eleventyConfig.setLibrary(
    "md",
    markdownIt(MARKDOWN_OPTIONS).use(markdownItAnchor)
  );

  eleventyConfig.addFilter("toHTML", (str) => {
    return new markdownIt(MARKDOWN_OPTIONS).renderInline(str);
  });

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addShortcode("currentYear", () => {
    return DateTime.local().toFormat("yyyy");
  });

  // Define passthrough for assets
  eleventyConfig.addPassthroughCopy({
    assets: "./"
  });

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }
    return content;
  });

  eleventyConfig.addCollection("questionDataObject", function (collectionApi) {
    const data = {};
    const targetCollection = collectionApi.getFilteredByTag("question");

    targetCollection.forEach((el) => {
      const slug = el.data.slug;
      data[slug] = el;
    });

    return data;
  });

  return {
    dir: {
      input: "content"
    }
  };
};

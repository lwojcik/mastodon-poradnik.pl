const markdownIt = require("markdown-it");
const htmlmin = require("html-minifier");
const orderedQuestionSlugs = require("./content/_data/orderedQuestionSlugs.json");

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

  eleventyConfig.setLibrary("md", markdownIt(MARKDOWN_OPTIONS));

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

  eleventyConfig.addCollection("questionDataArray", (collectionApi) => {
    const data = [];
    const targetCollection = collectionApi.getFilteredByTag("question");

    orderedQuestionSlugs.forEach((questionSlug) => {
      const element = targetCollection.find(
        (item) => item.data.slug === questionSlug
      );
      data.push(element);
    });

    return data;
  });

  eleventyConfig.addFilter("findIndexBySlug", (collection = [], value) =>
    collection.findIndex((item) => item.data.slug === value)
  );

  eleventyConfig.addFilter("getByIndex", (collection = [], value) => {
    if (value < 0) return null;
    return collection[value];
  });

  eleventyConfig.addShortcode("currentYear", () =>
    new Date().getFullYear().toString()
  );

  return {
    dir: {
      input: "content"
    }
  };
};

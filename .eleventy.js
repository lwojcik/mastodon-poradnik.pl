const markdownIt = require("markdown-it");
const htmlmin = require("html-minifier");
const { format } = require("date-fns");
const { parse } = require("node-html-parser");
const pl = require("date-fns/locale/pl");
const externalLinks = require("eleventy-plugin-external-links");
const siteConfig = require("./content/_data/siteConfig.json");
const orderedQuestionSlugs = require("./content/_data/orderedQuestionSlugs.json");
const Epub = require("epub-gen");

const MARKDOWN_OPTIONS = {
  html: true,
  xhtmlOut: true,
  // linkify: true,
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

  eleventyConfig.addFilter("localizeLinks", (content) => {
    const root = parse(content);
    const links = root.querySelectorAll("a");

    if (links) {
      links.forEach((link) => {
        if (!link.classList.contains("skip-localizing")) {
          const href = link.getAttribute("href");
          if (href && href.startsWith("/")) {
            const newHref = `#${href.replace(/\//g, "")}`;
            link.setAttribute("href", newHref);
          }
        }
      });
      // const newContent = root.toString();
      return root.toString();
    }
    return content;
  });

  eleventyConfig.addFilter("filterHtmlForEpub", (content) => {
    return content.replace(/"/g, '\\"').replace(/(\r\n|\n|\r)/gm, "");
  });

  eleventyConfig.addPlugin(externalLinks, {
    name: "external-links", // Plugin name
    regex: /^(([a-z]+:)(?!\/\/mastodon-poradnik.pl)|(\/\/))/i, // Regex that test if href is external
    target: "_self", // 'target' attribute for external links
    rel: "external noopener noreferrer", // 'rel' attribute for external links
    extensions: [".html"], // Extensions to apply transform to
    includeDoctype: true // Default to include '<!DOCTYPE html>' at the beginning of the file
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

  // eleventyConfig.addTransform("localLinks", (content, outputPath) => {
  //   if (outputPath && outputPath.endsWith("czytaj/index.html")) {
  //     const root = parse(content);
  //     const links = root.querySelectorAll("a");
  //     links.forEach((link) => {
  //       if (!link.classList.contains("skip-localizing")) {
  //         const href = link.getAttribute("href");
  //         if (href && href.startsWith("/")) {
  //           const newHref = `#${href.replace(/\//g, "")}`;
  //           link.setAttribute("href", newHref);
  //         }
  //       }
  //     });
  //     const newContent = root.toString();
  //     return newContent;
  //   }
  //   return content;
  // });

  eleventyConfig.addCollection("questionDataObject", function (collectionApi) {
    const data = {};
    const targetCollection = collectionApi.getFilteredByTag("question");

    targetCollection.forEach((el) => {
      const slug = el.data.slug;
      data[slug] = el;
    });

    return data;
  });

  eleventyConfig.addCollection("epubDataObject", function (collectionApi) {
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

  eleventyConfig.addFilter("readableDate", (date) =>
    format(date, "d MMMM yyyy 'r.'", {
      locale: pl
    })
  );

  eleventyConfig.addFilter("getByIndex", (collection = [], value) => {
    if (value < 0) return null;
    return collection[value];
  });

  eleventyConfig.addShortcode("currentYear", () =>
    new Date().getFullYear().toString()
  );

  eleventyConfig.addPlugin(require("eleventy-plugin-emoji"));

  eleventyConfig.addTransform(
    "generateEpub",
    async function (content, outputPath) {
      if (outputPath && outputPath.endsWith("epub.json")) {
        const { epub: epubConfig } = siteConfig;

        console.log("Generowanie epuba...");

        await new Epub(
          {
            ...epubConfig,
            content: JSON.parse(content)
          },
          "./mastodon-poradnik.epub"
        );

        return content;
      }
      return content;
    }
  );

  return {
    dir: {
      input: "content"
    }
  };
};

const siteConfig = require("../content/_data/siteConfig.json");
const Epub = require("epub-gen");
const fs = require("fs");
const path = require("path");

const jsonPath = path.join(__dirname, "..", "_site", "czytaj", "epub.json");
const epubPath = path.join(__dirname, "..", "_site", siteConfig.epub.fileName);

const generateEpub = async () => {
  console.log("Generating EPUB file...");
  const content = fs.readFileSync(jsonPath, {
    encoding: "utf8",
    flag: "r"
  });

  const { epub: epubConfig } = siteConfig;

  await new Epub(
    {
      ...epubConfig,
      verbose: true,
      content: JSON.parse(content)
    },
    epubPath
  );
};

generateEpub();

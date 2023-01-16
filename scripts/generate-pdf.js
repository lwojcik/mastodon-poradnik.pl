const path = require("path");
const fs = require("fs");
const html_to_pdf = require("html-pdf-node");
const siteConfig = require("../content/_data/siteConfig.json");

const generatePdf = () => {
  console.log("Generating PDF file...");

  const rootPath = path.join(__dirname, "..", "_site");

  const htmlContentPath = path.join(rootPath, "czytaj", "czytaj-pdf.html");

  const content = fs.readFileSync(htmlContentPath, {
    encoding: "utf8",
    flag: "r"
  });

  const file = {
    content
  };

  const options = {
    format: siteConfig.pdf.format,
    path: path.join(rootPath, siteConfig.pdf.fileName),
    margin: {
      top: "2.5cm",
      bottom: "2.5cm",
      left: "2.5cm",
      right: "2.5cm"
    },
    preferCSSPageSize: true
  };

  html_to_pdf.generatePdf(file, options);
};

generatePdf();

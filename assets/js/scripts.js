const switchToDarkLabel = "Włącz tryb ciemny";
const switchToLightLabel = "Włącz tryb jasny";

const switchToDark = (htmlElement) => {
  document.querySelector("html").setAttribute("data-theme", "dark");
  document.querySelector(".theme-switcher").innerText = switchToLightLabel;
};

const switchToLight = () => {
  document.querySelector("html").setAttribute("data-theme", "light");
  document.querySelector(".theme-switcher").innerText = switchToDarkLabel;
};

window.addEventListener("DOMContentLoaded", () => {
  const themeKey = "theme";
  const htmlElement = document.querySelector("html");
  const currentTheme = localStorage.getItem(themeKey) || null;

  if (currentTheme === "dark") {
    switchToDark();
  } else if (currentTheme === "light") {
    switchToLight();
  }

  document
    .querySelector(".theme-switcher")
    .addEventListener("click", function () {
      const currentMode = htmlElement.getAttribute("data-theme");

      if (currentMode === "light") {
        switchToDark(htmlElement);
        if (localStorage.setItem) localStorage.setItem(themeKey, "dark");
      } else {
        switchToLight(htmlElement);
        if (localStorage.setItem) localStorage.setItem(themeKey, "light");
      }
    });
});

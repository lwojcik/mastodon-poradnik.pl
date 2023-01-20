const switchToDarkLabel = "Włącz tryb ciemny";
const switchToLightLabel = "Włącz tryb jasny";
const htmlThemeAttribute = "data-theme";
const themeKey = "theme";
const darkValue = "dark";
const lightValue = "light";

const switchToDark = () => {
  document.querySelector("html").setAttribute(htmlThemeAttribute, darkValue);
  document.querySelector(".theme-switcher").innerText = switchToLightLabel;
};

const switchToLight = () => {
  document.querySelector("html").setAttribute(htmlThemeAttribute, lightValue);
  document.querySelector(".theme-switcher").innerText = switchToDarkLabel;
};

const saveThemePreference = (value) => {
  if (localStorage.setItem) localStorage.setItem(themeKey, value);
};

window.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.querySelector("html");
  const currentTheme = localStorage.getItem(themeKey) || null;

  if (currentTheme === darkValue) {
    switchToDark();
  } else if (currentTheme === lightValue) {
    switchToLight();
  }

  document.querySelector(".theme-switcher").addEventListener("click", () => {
    const currentMode = htmlElement.getAttribute("data-theme");

    if (currentMode === lightValue) {
      switchToDark(htmlElement);
      saveThemePreference(darkValue);
    } else if (currentMode === darkValue) {
      switchToLight(htmlElement);
      saveThemePreference(lightValue);
    }
  });
});

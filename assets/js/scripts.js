window.addEventListener("DOMContentLoaded", () => {
  const switchToDarkLabel = "Włącz tryb ciemny";
  const switchToLightLabel = "Włącz tryb jasny";

  document.querySelector(".theme-switcher").addEventListener("click", () => {
    console.log("click!");
    const htmlElement = document.querySelector("html");
    const currentMode = htmlElement.getAttribute("data-theme");
    console.log(currentMode);

    if (currentMode === "light") {
      htmlElement.setAttribute("data-theme", "dark");
      document.querySelector(".theme-switcher").innerText = switchToLightLabel;
    } else {
      htmlElement.setAttribute("data-theme", "light");
      document.querySelector(".theme-switcher").innerText = switchToDarkLabel;
    }
  });
});

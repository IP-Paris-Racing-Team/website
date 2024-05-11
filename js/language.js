/* Language strings handler */
window.addEventListener("DOMContentLoaded", async () => {
    const lang = localStorage.getItem("lang") || "fr";
    updateContentTo(lang);
});

async function changeLanguage(lang) {
    localStorage.setItem("lang", lang);
    updateContentTo(lang);
}

async function updateContentTo(lang) {
    document.querySelectorAll("[data-fr]").forEach((element) => {
        const frString = element.getAttribute("data-fr");
        const enString = element.getAttribute("data-en");
        const frHtmlString = element.getAttribute("data-fr-html");
        const enHtmlString = element.getAttribute("data-en-html");
        if (frHtmlString && enHtmlString) {
            if (lang === "fr") {
                element.innerHTML = frHtmlString;
            } else {
                element.innerHTML = enHtmlString;
            }
        } else {
            if (lang === "fr") {
                element.textContent = frString;
            } else {
                element.textContent = enString;
            }
        }
    });
}
/* Language strings handler */

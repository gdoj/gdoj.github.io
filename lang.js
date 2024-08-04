document.addEventListener("DOMContentLoaded", () => {
  const languageLinks = document.querySelectorAll(".language");
  const contentElements = document.querySelectorAll("[data-key]");
  let translations = {};

  async function loadTranslations(lang) {
    try {
      const response = await fetch(`./${lang}.json`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      translations = await response.json();
      updateContent();
    } catch (error) {
      console.error("Error loading translations:", error);
    }
  }

  function updateContent() {
    contentElements.forEach((el) => {
      const key = el.getAttribute("data-key");
      if (translations[key]) {
        el.textContent = translations[key];
      } else {
        console.warn(`No translation found for key: ${key}`);
      }
    });
  }

  function changeLanguage(lang) {
    languageLinks.forEach((el) => {
      el.classList.remove("active");
      if (el.getAttribute("data-lang") === lang) {
        el.classList.add("active");
      }
    });

    loadTranslations(lang);
  }

  languageLinks.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default link behavior
      const lang = el.getAttribute("data-lang");
      changeLanguage(lang);
    });
  });

  // Set default language
  const defaultLang = "en"; // or 'vi'
  changeLanguage(defaultLang);
});

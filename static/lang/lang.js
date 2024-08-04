document.addEventListener("DOMContentLoaded", () => {
  const languageLinks = document.querySelectorAll(".language");
  const contentElements = document.querySelectorAll("[data-key]");
  let translations = {};

  async function loadTranslations(lang) {
    try {
<<<<<<< HEAD
      const response = await fetch(`./static/lang/${lang}.json`);
=======
      const response = await fetch(`./static/lang/${lang}.json`); 
>>>>>>> 802cb924bfe646584ed45265c4f0a085018ac4b2
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

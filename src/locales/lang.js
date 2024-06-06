export function checkFixLang(lang = "ar") {
  if (lang === "en") {
    document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    document.getElementsByTagName("body")[0].setAttribute("dir", "ltr");
  }

  if (lang === "ar") {
    document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    document.getElementsByTagName("body")[0].setAttribute("dir", "rtl");
  }
}

export function switchLang(lang) {
  document.getElementsByTagName("html")[0].setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.getElementsByTagName("body")[0].setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.getElementsByTagName("html")[0].setAttribute("lang", lang);
}

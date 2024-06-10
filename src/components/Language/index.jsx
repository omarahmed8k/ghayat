import { useTranslation } from "react-i18next";
import { switchLang } from "../../locales/lang";
import language from "../../locales/i18n";
import { ReactComponent as Lang } from "../../assets/images/lang.svg";
import "./styles.css";

export default function Language() {
  const lang = language.language;
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    switchLang(lng);
  };

  return (
    <>
      {lang === "en" ? (
        <button
          className="nav-link language"
          onClick={() => changeLanguage("ar")}
        >
          <Lang />
        </button>
      ) : (
        <button
          className="nav-link language"
          onClick={() => changeLanguage("en")}
        >
          <Lang />
        </button>
      )}
    </>
  );
}

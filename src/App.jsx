import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";
import { checkFixLang } from "./locales/lang";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import i18n from "./locales/i18n";
import "custom-cursor-react/dist/index.css";
import Language from "./components/Language";
// import CustomCursor from "custom-cursor-react";

function App() {
  const lang = i18n.language || localStorage.getItem("i18nextLng");

  useEffect(() => {
    checkFixLang(lang);
    return () => {
      checkFixLang("ar");
    };
  }, [lang]);

  return (
    <Router>
      {/* <CustomCursor
        targets={["a", ".your-css-selector"]}
        customClass="custom-cursor"
        dimensions={35}
        fill="#021f5a"
        smoothness={{
          movement: 1,
          scale: 1,
          opacity: 1,
        }}
        targetOpacity={0.3}
      /> */}
      <Language />
      <Header />
      <Whatsapp />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;

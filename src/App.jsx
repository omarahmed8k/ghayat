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

function App() {
  const lang = localStorage.getItem("i18nextLng") || i18n.language|| "ar";

  useEffect(() => {
    checkFixLang(lang);
    return () => {
      checkFixLang("ar");
    };
  }, [lang]);

  return (
    <Router>
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

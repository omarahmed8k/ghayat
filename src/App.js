import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

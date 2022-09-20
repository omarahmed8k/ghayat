import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </Router>
  );
}

export default App;

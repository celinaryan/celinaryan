import { h } from "preact";
import Router from "preact-router";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Exp from "./Exp";
import Contact from "./Contact";
import Footer from "./Footer";
const App = () => (
  <div id="app">
    <NavBar />

    <Router>
      <Home default />
      <Exp path="/exp" />
      <Skills path="/skills" />
      <About path="/about" />
      <Contact path="/contact" />
    </Router>
    <Footer />
  </div>
);

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path= {process.env.PUBLIC_URL + "/"}  component={Home} />
        <Route exact path= {process.env.PUBLIC_URL + "/About"}  component={About} />
        <Route exact path= {process.env.PUBLIC_URL + "/Projects" } component={Projects} />
        <Route path= {process.env.PUBLIC_URL + "/Contact"  } component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

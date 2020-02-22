import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/navigation";
import About from "./components/About";
import Hobby from "./components/Hobby";
import Photo from "./components/Photo";
import Home from "./components/Home";
import "./App.css";
import WOWPage from "./components/wow";
import HearthstonePage from "./components/hearthstone";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/photo" component={Photo} />
        <Route path="/hobby" component={Hobby} />
        <Route path="/wow" component={WOWPage} />
        <Route path="/hearthstone" component={HearthstonePage} />
      </div>
    </Router>
  );
}

export default App;

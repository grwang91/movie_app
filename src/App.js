import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
      <Route exact path="/" component={Home} />
    </HashRouter>
  );
}

export default App;

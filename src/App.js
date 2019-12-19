import React, { Fragment, useState } from "react";
import "./App.scss";
import { Navbar } from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./components/pages/About";

const App = () => {
  const [randomFact, setRandomFact] = useState({
    fact: "",
    length: 0
  });
  const getRandomFact = async () => {
    const res = await fetch("https://catfact.ninja/fact");
    const json = await res.json();
    setRandomFact({
      fact: json.fact,
      length: json.length
    });
  };
  return (
    <div className="App">
      <Router>
        <Fragment>
          <header>
            <h1>Facts of cats</h1>
            <Navbar />
          </header>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <div className="RandomGenerateFact">
                  <button onClick={getRandomFact}>
                    Give me fact <span class="icon-paw-print"></span>
                  </button>
                </div>
                <div className="RandomFact">
                  {randomFact.length !== 0 && (
                    <div>
                      <p class="">{randomFact.fact}</p>
                    </div>
                  )}
                </div>
              </Route>
              <Route exact path="/about">
                <About></About>
              </Route>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;

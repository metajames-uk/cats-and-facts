import React, { Fragment, useState } from "react";
import "./App.css";
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
                    Generate a fact about cats
                  </button>
                </div>
                <div className="Random Fact">
                  {randomFact.length !== 0 ? (
                    <div>
                      <h3>Random Cat Fact</h3>
                      <p>{randomFact.fact}</p>
                    </div>
                  ) : (
                    <div></div>
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

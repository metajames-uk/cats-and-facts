import React, { Fragment, useState } from "react";
import "./App.scss";
import { Navbar } from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./components/pages/About";
import { Index } from "./components/pages/Index";

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
    <div className='App'>
      <Router>
        <Fragment>
          <header>
            <h1>Facts of cats</h1>
            <Navbar />
          </header>
          <div className='container'>
            <Switch>
              <Route exact path='/'>
                <Index handleClick={getRandomFact} randomFact={randomFact} />
              </Route>
              <Route exact path='/about'>
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

import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import SquarePage from './components/SquarePage';

import PrivateRoute from './components/PrivateRoute';

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path='/squares' component={SquarePage} />
      </div>
    </Router>
  );
}

export default App;

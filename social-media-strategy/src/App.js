import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddAccount from "./components/AddAccount";


const routes = (
  <Router>
    <Switch>
      <Route path="/add-acct" component={AddAccount} />
    </Switch>
  </Router>
)

export default function App() {

  return (
    <main>
      <Dashboard></Dashboard>
    </main>
  );
}

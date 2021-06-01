import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
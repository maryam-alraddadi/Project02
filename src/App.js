import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/:username" component={UserProfile} />
      </Switch>
    </Router>
  );
};

export default App;

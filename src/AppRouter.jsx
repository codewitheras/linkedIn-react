import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/HomePage/Homepage";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Homepage} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;

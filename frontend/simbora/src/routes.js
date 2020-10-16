import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import CreateIdea from "./pages/create-idea";
import ShowIdeas from "./pages/show-ideas";
import AboutUs from "./pages/aboutUs";
import Sucessfull from "./pages/showSucessfull";
import Idea from "./pages/showOnlyOneIdea";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/create-idea" component={CreateIdea} />
      <Route path="/show-ideas" component={ShowIdeas} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/sucessfull" component={Sucessfull} />
      <Route path="/idea/:id" component={Idea} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

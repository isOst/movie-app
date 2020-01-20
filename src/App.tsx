import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import {Header} from "./theme/Header";
import {PageMoviesComponent} from "./components/PageMovies.component";
import {PageMovieComponent} from "./components/PageMovie.component";

export const App: React.FC = () => {
  return (
      <div>
          <Header>Movies Application</Header>
          <Router>
              <Switch>
                  <Route exact path="/" component={PageMoviesComponent} />
                  <Route path="/:id" component={PageMovieComponent} />
              </Switch>
          </Router>
      </div>
  );
};

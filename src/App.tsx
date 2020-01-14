import React from 'react';
import { HashRouter as Router, Link, Switch, Route } from "react-router-dom";
import './App.css';
import {Home} from "./components/Home";
import {Foo} from "./components/Foo";
import {Bar} from "./components/Bar";

export const App: React.FC = () => {
  return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/foo">Foo</Link>
            <Link to="/bar">Bar</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/foo" component={Foo} />
            <Route exact path="/bar" component={Bar} />
          </Switch>
        </div>
      </Router>
  );
};

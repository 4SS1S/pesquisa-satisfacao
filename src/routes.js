import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from './pages/login';

export default function Routes() {
  console.log(localStorage.getItem('unidade'), 'teste')
  return (
    <Router basename="http://popescolas.com.br/portal/satisfacao/">
      <Switch>
        <Route path="/" exact component={localStorage.getItem('unidade') !== null ? Home : Login} />
        <Route path="*" exact component={() => <>Erro</>} />
      </Switch>
    </Router>
  );
}

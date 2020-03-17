import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Paises from "../components/Paises/Index";
import Global from "../components/Global/Index";
import Informacion from "../components/Informacion/Index";
import Page404 from "../components/Page404/Index";

// Rutas de la App
const Index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Paises />} />
        <Route path="/paises" exact render={() => <Paises />} />
        <Route path="/global" exact render={() => <Global />} />
        <Route path="/informacion" exact render={() => <Informacion />} />
        <Route render={() => <Page404 />} />
      </Switch>
    </Router>
  );
};

export default Index;

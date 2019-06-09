import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Path1 from "./containers/Path1";
import Path2 from "./containers/Path2";
import Path3 from "./containers/Path3";
import Path4 from "./containers/Path4";
import Path5 from "./containers/Path5";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Path1" exact component={Path1} />
    <Route path="/Path2" exact component={Path2} />
    <Route path="/Path3" exact component={Path3} />
    <Route path="/Path4" exact component={Path4} />
    <Route path="/Path5" exact component={Path5} />
  </Switch>;

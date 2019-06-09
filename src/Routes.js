import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Home from "./containers/Home";
import Path1 from "./containers/Path1";
import Path2 from "./containers/Path2";
import Path3 from "./containers/Path3";
import Path4 from "./containers/Path4";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/Path1" exact component={Path1} props={childProps}/>
    <AppliedRoute path="/Path2" exact component={Path2} props={childProps}/>
    <AppliedRoute path="/Path3" exact component={Path3} props={childProps}/>
    <AppliedRoute path="/Path4" exact component={Path4} props={childProps}/>
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
  	{/*<UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />*/}
  </Switch>;

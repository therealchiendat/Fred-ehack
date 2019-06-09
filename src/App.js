import React, { Component, Fragment } from "react";
import Routes from "./Routes";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Fab } from "@material-ui/core"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  handleLogout = event => {
    this.userHasAuthenticated(false);
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Fred-ehack</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {this.state.isAuthenticated
              ? <Fragment>
                  <Fab color="primary">Host</Fab>
                  <NavItem onClick={this.handleLogout}>Logout</NavItem>
                </Fragment>
              : <Fragment>
                    <NavItem href="/login">Login</NavItem>
                    <NavItem href="/signup">Sign Up</NavItem>
                </Fragment>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  };
}

export default App;

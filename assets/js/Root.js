import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Nav from "./partials/Nav"
import Users from './views/Users'
import Register from './views/Register'

class Root extends React.Component {
	render() {
		return (
      <BrowserRouter>
        <Nav />
        <main className="main mt-5">
          <Switch>
            <Route exact path="/">
              <Redirect to="/users" />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
		);
	}
}

export default Root;
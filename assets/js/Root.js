import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './partials/Header'
import Home from './views/Home'
import Users from './views/Users'
import About from './views/About'
import Contact from './views/Contact'
import Login from './views/Login'
import Register from './views/Register'

class Root extends React.Component {
	render() {
		return (
      <BrowserRouter>
        <Header />
        <main className="main mt-5">
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
          </div>
        </main>
      </BrowserRouter>
		);
	}
}

export default Root;
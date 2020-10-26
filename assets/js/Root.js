import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

class Root extends React.Component {
	render() {
		return (
      <BrowserRouter>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Redirect to="/users" />
            </Route>
            <Route path="/users">
              <h2>
                Users
              </h2>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
		);
	}
}

export default Root;
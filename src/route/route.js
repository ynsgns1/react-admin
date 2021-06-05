import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import NotifySnackbar from '../components/NotifySnackbar'
import Drawer from './Drawer'

import Login from '../pages/Login'
import Users from '../pages/Users'
import Dashboard from '../pages/Dashboard'



function App() {
  return (<div>
    <NotifySnackbar />
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Drawer>
          <Route path="/p" component={({ match }) =>
            <div>
              <Route path={match.url + "/Users"} component={Users} />
              <Route path={match.url + "/Dashboard"} component={Dashboard} />
            </div>
          } />
        </Drawer>
      </Switch>
    </Router>
  </div>
  );
}

export default App

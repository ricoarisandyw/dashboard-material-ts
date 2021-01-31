import React from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from 'react-router-dom'

const hist = createBrowserHistory();

const AppRoute: React.FC = () => {
    return (
        <Router history={hist}>
            <Switch>
                <Route path="/admin" component={Admin} />
                <Redirect from="/" to="/admin/dashboard" />
            </Switch>
        </Router>
    )    
}

export default AppRoute
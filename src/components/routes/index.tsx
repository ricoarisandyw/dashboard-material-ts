import React from 'react'
import { createBrowserHistory } from "history";
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'
import Admin from './Admin';

const hist = createBrowserHistory();

const AppRoute: React.FC = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/admin" component={Admin} />
                <Redirect from="/" to="/admin/dashboard" />
            </Switch>
        </HashRouter>
    )    
}

export default AppRoute
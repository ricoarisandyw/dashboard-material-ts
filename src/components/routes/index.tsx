import React from 'react'
import { createBrowserHistory } from "history";
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom'
import Admin from './Admin';
import { generalRoutes } from './routes';

const hist = createBrowserHistory();

const AppRoute: React.FC = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/">
                    <Switch>
                        {generalRoutes.map((prop, key) => {
                            return (
                                <Route
                                    path={prop.layout + prop.path}
                                    component={prop.component}
                                    key={key}
                                />
                            );
                        })}
                        <Redirect to="/login" />
                    </Switch>
                </Route>
            </Switch>
        </HashRouter>
    )    
}

export default AppRoute
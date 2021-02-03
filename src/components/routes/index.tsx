import React from 'react'
import { createBrowserHistory } from "history";
import { Route, HashRouter, Redirect } from 'react-router-dom'
import Admin from './Admin';
import { generalRoutes } from './routes';

const hist = createBrowserHistory();

const AppRoute: React.FC = () => {
    return (
        <HashRouter>
            <Route path="/admin" component={Admin} />
            <Route path="/">
                {generalRoutes.map((prop, key) => {
                    return (
                        <Route
                            path={prop.layout + prop.path}
                            component={prop.component}
                            key={key}
                        />
                    );
                })}
            </Route>
        </HashRouter>
    )    
}

export default AppRoute
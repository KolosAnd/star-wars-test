import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {mainRoutes} from "./router";

const AppRouter = () => {
    return (
            <Switch>
                {mainRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/planets'/>
            </Switch>
    );
}

export default AppRouter;
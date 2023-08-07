import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Login from '../pages/Login'

const isAuthenticated = false;
const Routes = () => {
    return (
        <Switch>
            <PrivateRoute path='/' exact component={Dashboard} isAuthenticated={isAuthenticated}/>
            <PrivateRoute path='/customers' component={Customers} isAuthenticated={isAuthenticated}/>
            <Route path='/login' component={Login}/>
        </Switch>
    )
}

export default Routes

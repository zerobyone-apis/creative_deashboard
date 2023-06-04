import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'


// Crear el resto de las rutas y componentes para los demas tabs y categorias

// Crear las rutas para cada path incluido las notificaciones y las busquedas del search
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
        </Switch>
    )
}

export default Routes

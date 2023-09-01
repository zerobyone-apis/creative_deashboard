import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import { LoginView } from "../pages/LoginView";
import { Logout } from "./logout/Logout";

const Routes = () => {
	const isAuthenticated = useSelector(state => state.UserReducer.user);
	const history = useHistory();

	useEffect(() => {
		if (isAuthenticated) history.push("/");
	}, [isAuthenticated]);
	return (
		<Switch>
			<PrivateRoute
				path="/"
				exact
				component={Dashboard}
				isAuthenticated={isAuthenticated}
			/>
			<PrivateRoute
				path="/customers"
				component={Customers}
				isAuthenticated={isAuthenticated}
			/>
			<Route path="/logout" component={Logout} />
			<Route path="/login" component={LoginView} />
		</Switch>
	);
};

export default Routes;

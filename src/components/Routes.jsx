import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useNavigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import { LoginView } from "../pages/LoginView";

const Routes = () => {
	const isAuthenticated = useSelector(state => state.UserReducer.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) navigate("/");
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
			<Route path="/login" component={LoginView} />
		</Switch>
	);
};

export default Routes;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { logoutUser } from "../../redux/actions/LoginAction";

export function Logout() {
	const dispatch = useDispatch();
	const history = useHistory();
	useEffect(() => {
		console.log("ingreso");
		dispatch(logoutUser()); //deslogueo
		history.push("/login");
	}, []);

	return <div>Logout...</div>;
}

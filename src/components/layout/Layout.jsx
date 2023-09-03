import React, { useEffect } from "react";

import "./layout.css";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import Routes from "../Routes";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ThemeAction from "../../redux/actions/ThemeAction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
	const themeReducer = useSelector(state => state.ThemeReducer);
	const user = useSelector(state => state.UserReducer.user);

	const dispatch = useDispatch();

	useEffect(() => {
		const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

		const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

		dispatch(ThemeAction.setMode(themeClass));

		dispatch(ThemeAction.setColor(colorClass));
	}, [dispatch]);

	return (
		<>
			<BrowserRouter>
				<Route
					render={props => (
						<div
							className={`layout ${themeReducer.mode} ${themeReducer.color}`}
						>
							{user && <Sidebar {...props} />}
							<div className={user ? "layout__content" : "layout__content_2"}>
								{user && <TopNav />}
								<div className="layout__content-main">
									<Routes />
								</div>
							</div>
						</div>
					)}
				/>
			</BrowserRouter>
			<ToastContainer
				theme={themeReducer.mode == "theme-mode-light" ? "light" : "dark"}
			/>
		</>
	);
};

export default Layout;

import React from "react";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";

import { reducer } from "./redux/reducers";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/theme.css";
import "./assets/css/index.css";
import { createRoot } from "react-dom/client";

import Layout from "./components/layout/Layout";
import { configureStore } from "@reduxjs/toolkit";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const store = configureStore({ reducer });
const theme = createTheme({});

document.title = "CreativeLabs Dashboard";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<Layout />
		</ThemeProvider>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

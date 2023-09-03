/** @type { import('@storybook/react').Preview } */
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({});

import "../src/assets/boxicons-2.0.7/css/boxicons.min.css";
import "../src/assets/css/grid.css";
import "../src/assets/css/theme.css";
import "../src/assets/css/index.css";

export default {
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				{/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
				<Story />
			</ThemeProvider>
		),
	],
};

import React from "react";

import Badge from "../components/badge/Badge";
import "../components/badge/badge.css";

export default {
	title: "Atoms/Badge",
	component: Badge,
};

export const Primary = {
	args: {
		type: "primary",
		content: "Primary",
	},
};

export const Success = {
	args: {
		type: "success",
		content: "Success",
	},
};

export const Warning = {
	args: {
		type: "warning",
		content: "Warning",
	},
};

export const Danger = {
	args: {
		type: "danger",
		content: "Danger",
	},
};

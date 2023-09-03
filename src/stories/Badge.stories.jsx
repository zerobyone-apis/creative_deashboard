import React from "react";

import Badge from "../components/badge/Badge";
import "../components/badge/badge.css";

export default {
	title: "Atoms/Badge",
	component: Badge,
	tags: ["autodocs"],
};

export const Primary = {
	args: {
		content: "Primary",
		type: "primary",
	},
};

export const Success = {
	args: {
		content: "Success",
		type: "success",
	},
};

export const Warning = {
	args: {
		content: "Warning",
		type: "warning",
	},
};

export const Danger = {
	args: {
		content: "Danger",
		type: "danger",
	},
};

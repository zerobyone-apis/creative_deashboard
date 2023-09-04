import React from "react";

import StatusCard from "../components/status-card/StatusCard";
import "../components/status-card/statuscard.css";

export default {
	title: "Molecules/StatusCard",
	component: StatusCard,
	tags: ["autodocs"],
};

export const Example = {
	args: {
		title: "# Messages per day",
		icon: "bx bx-message",
		count: "1.203",
	},
};

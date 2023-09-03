import React from "react";
import PropTypes from "prop-types";

import "./badge.css";

const Badge = props => {
	return <span className={`badge badge-${props.type}`}>{props.content}</span>;
};

Badge.propTypes = {
	/**
	 * What type of badge do you want?
	 */
	type: PropTypes.oneOf(["primary", "success", "warning", "danger"]),
	/**
	 * Children text
	 */
	content: PropTypes.string,
};

export default Badge;

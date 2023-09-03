import React from "react";
import "./statuscard.css";
import PropTypes from "prop-types";

const StatusCard = props => {
	return (
		<div className="status-card">
			<div className="status-card__icon">
				<i className={props.icon}></i>
			</div>
			<div className="status-card__info">
				<h4>{props.count}</h4>
				<span>{props.title}</span>
			</div>
		</div>
	);
};

StatusCard.propTypes = {
	/**
	 * Use the icon you want to place on your card, you can use any icon from https://boxicons.com/
	 */
	icon: PropTypes.oneOf([
		"bx bx-shopping-bag",
		"bx bx-cart",
		"bx bx-dollar-circle",
		"bx bx-receipt",
		"bx bx-message-alt",
	]),
	/**
	 *  Count in number or string
	 *  You can use another text if you want, but we recommend that should be a numeric type
	 */
	count: PropTypes.string,
	/**
	 *  Title that put it main context of "what is this?" exactly
	 *  Make it simple and consist
	 */
	title: PropTypes.string,
};

StatusCard.defaultProps = {
	icon: "bx bx-cart",
	count: "0.000",
	title: "Title here",
};

export default StatusCard;

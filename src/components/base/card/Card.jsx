import React from "react";

export const Card = ({ children, className = "", sx = {} }) => {
	const styled = {
		padding: "30px",
		display: "flex",
		alignItems: "center",
		backgroundColor: "var(--main-bg)",
		boxShadow: "var(--box-shadow)",
		borderRadius: "var(--border-radius)",
		position: "relative",
		overflow: "hidden",
		zIndex: 1,
		transition: "color 0.5s ease 0s",
	};

	return (
		<div className={className} style={{ ...styled, ...sx }}>
			{children}
		</div>
	);
};

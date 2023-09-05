import React, { useState } from "react";
import "./navitem.css";

export function NavItem(props) {
	const [open, setOpen] = useState(false);

	return (
		<li className="nav-item">
			<a href="#" className="icon-button" onClick={() => setOpen(!open)}>
				<i className={props.icon}></i>
			</a>

			{open && props.children}
		</li>
	);
}

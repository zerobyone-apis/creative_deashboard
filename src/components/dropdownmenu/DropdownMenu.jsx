import React, { useRef, useState, useEffect } from "react";
import "./dropdownmenu.css";
import { CSSTransition } from "react-transition-group";

export function DropdownMenu() {
	const [activeMenu, setActiveMenu] = useState("main");
	const [menuHeight, setMenuHeight] = useState(null);
	const dropdownRef = useRef(null);

	useEffect(() => {
		setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 35);
	}, []);

	function calcHeight(el) {
		const height = el.offsetHeight;
		setMenuHeight(height + 35);
	}

	function DropdownItem(props) {
		return (
			<a
				href="#"
				className="menu-item"
				onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
			>
				<span className="icon-button">{props.leftIcon}</span>
				{props.children}
				<span className="icon-right">{props.rightIcon}</span>
			</a>
		);
	}

	return (
		<div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
			<CSSTransition
				in={activeMenu === "main"}
				timeout={500}
				classNames="menu-primary"
				unmountOnExit
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem>My Profile</DropdownItem>
					<DropdownItem
						leftIcon={<i className="bx bx-cog" />}
						rightIcon={<i className="bx bx-chevron-right" />}
						goToMenu="settings"
					>
						Settings
					</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "settings"}
				timeout={500}
				classNames="menu-secondary"
				unmountOnExit
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem
						goToMenu="main"
						leftIcon={<i className="bx bx-chevron-left" />}
					>
						<h2>My settings</h2>
					</DropdownItem>

					<DropdownItem leftIcon={<i className="bx bxs-user-account" />}>
						Account information
					</DropdownItem>
					<DropdownItem leftIcon={<i className="bx bx-envelope" />}>
						Change my email
					</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
}

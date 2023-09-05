import React from "react";
import "./topnav.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ThemeMenu from "../theme-menu/ThemeMenu";
import { NavItem } from "../navitem/NavItem";
import { DropdownMenu } from "../dropdownmenu/DropdownMenu";

const renderNotificationItem = (item, index) => (
	<div className="notification-item" key={index}>
		<i className={item.icon}></i>
		<span>{item.content}</span>
	</div>
);

const renderUserToggle = user => (
	<div className="topnav__right-user">
		<div className="topnav__right-user__image">
			<img src={user.image} alt="" />
		</div>
		<div className="topnav__right-user__name">{user.display_name}</div>
	</div>
);

const renderUserMenu = (item, index) => (
	<Link to={item?.redirect || "/"} key={index}>
		{/*Crear un espacio de notificaciones center donde unifiquemos las notificaciones 
                            y podamos gestionar sus diferentes 
        funcionalidades como , los reportes, el actualizar su plan contratado o los aviso generados.
        */}
		<div className="notification-item">
			<i className={item.icon}></i>
			<span>{item.content}</span>
		</div>
	</Link>
);

const Topnav = () => {
	const user = useSelector(state => state.UserReducer.user);

	return (
		<div className="topnav">
			<div className="topnav__search">
				{/*
                  - Logica de busqueda, que al buscar key words como son las categorias del SIDEBAR los redireccione a ellas con un <Link > o algo.
                  - Logica para la busqueda especifica de productos por ID, reservas por ID, usuarios por ID, y alguna cosa mas que proveamos. 
                  - Algunas mas. !! Reach Search !!
                  */}
				<input type="text" placeholder="Search here..." />
				<i className="bx bx-search"></i>
			</div>
			<div className="topnav__right" style={{ gap: "3px" }}>
				<div>
					<NavItem icon="bx bx-user">
						<DropdownMenu />
					</NavItem>
				</div>
				<div>
					{/* dropdown here */}
					<NavItem icon="bx bx-bell" />
				</div>
				<div className="topnav__right-item">
					<ThemeMenu />
				</div>
			</div>
		</div>
	);
};

export default Topnav;

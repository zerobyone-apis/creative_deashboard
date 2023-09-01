import React from "react";
import "./topnav.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import ThemeMenu from "../theme-menu/ThemeMenu";
import notifications from "../../assets/JsonData/notification.json";
import user_image from "../../assets/images/tuat.png";
import user_menu from "../../assets/JsonData/user_menus.json";

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
			<div className="topnav__right">
				<div className="topnav__right-item">
					{/* dropdown here */}
					<Dropdown
						customToggle={() =>
							renderUserToggle({
								display_name: user.username,
								image: user_image,
							})
						}
						contentData={user_menu}
						renderItems={(item, index) => renderUserMenu(item, index)}
					/>
				</div>
				<div className="topnav__right-item">
					{/* dropdown here */}
					<Dropdown
						icon="bx bx-bell"
						badge="12"
						contentData={notifications}
						renderItems={(item, index) => renderNotificationItem(item, index)}
						renderFooter={() => (
							<Link to="/">
								{/*Aca redirigirlo al centro de notificaciones que comentaba.*/}
								View All
							</Link>
						)}
					/>
				</div>
				<div className="topnav__right-item">
					<ThemeMenu />
				</div>
			</div>
		</div>
	);
};

export default Topnav;

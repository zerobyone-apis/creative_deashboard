import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/LoginAction";
import "./Login.css";
import { Card } from "../base/card/Card";
import { auth } from "../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export const Login = () => {
	const dispatch = useDispatch();
	const [user, setUser] = useState({ username: "", password: "" });
	const handleLogin = () => {
		// Aquí podrías realizar la lógica de autenticación, como enviar una solicitud al servidor
		// y recibir la respuesta de éxito junto con los datos del usuario.
		signInWithEmailAndPassword(auth, user.username, user.password)
			.then(userCredential => {
				const userData = {
					username: user.username,
				};

				dispatch(loginUser(userData));
			})
			.catch(error => {
				const errorMessage = error.message;
				toast(errorMessage);
			});
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				height: "100%",
				alignItems: "center",
			}}
		>
			<Card
				className={"col-4"}
				sx={{
					height: "450px",
					display: "flex",
					flexDirection: "column",
					padding: "0px",
				}}
			>
				<Box sx={{ width: "100%" }}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						style={{
							padding: 0,
							width: "150%",
							height: "100%",
						}}
					>
						<path
							fill="var(--main-color)"
							fillOpacity="1"
							style={{ width: "100%", height: "100%" }}
							d="M0,64L60,106.7C120,149,240,235,360,261.3C480,288,600,256,720,208C840,160,960,96,1080,90.7C1200,85,1320,139,1380,165.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
						></path>
					</svg>
				</Box>

				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						height: "25px",
						textAlign: "center",
						alignContent: "center",
					}}
				>
					<h3>Welcome back</h3>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						gap: 2,
						height: "100%",
						width: "100%",
						padding: "25px",
					}}
				>
					<Box sx={{ display: "flex", alignItems: "flex-start" }}>
						<AccountCircle sx={{ mr: 1, my: 0.5 }} />
						<input
							className="txt"
							placeholder="Username"
							type="username"
							value={user.username}
							onChange={e => setUser({ ...user, username: e.target.value })}
							style={{ backgroundColor: "var(--main-bg)", width: "100%" }}
						/>
					</Box>
					<Box sx={{ display: "flex", alignItems: "flex-start" }}>
						<PasswordIcon sx={{ mr: 1, my: 0.5 }} />
						<input
							className="txt"
							placeholder="Password"
							type="password"
							onChange={e => setUser({ ...user, password: e.target.value })}
							style={{ backgroundColor: "var(--main-bg)", width: "100%" }}
						/>
					</Box>
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<button
							className="btn"
							style={{ width: "50%" }}
							onClick={handleLogin}
						>
							Login
						</button>
					</Box>
				</Box>
			</Card>
		</div>
	);
};

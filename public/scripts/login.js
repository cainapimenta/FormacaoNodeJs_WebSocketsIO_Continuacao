import { emitirAutenticarUsuario } from "./socket/socket-front-login.js";

const formLogin = document.getElementById("form-login");

formLogin.addEventListener("submit", (event) => {
	event.preventDefault();

	const userName = formLogin["input-usuario"].value;
	const passowrd = formLogin["input-senha"].value;

	emitirAutenticarUsuario({ userName, passowrd });
});
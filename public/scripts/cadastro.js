import { emitirCadastroUsuario } from "./socket/socket-front-cadastro.js";

const formCadastro = document.getElementById("form-cadastro");

formCadastro.addEventListener("submit", (event) => {
	event.preventDefault();

	const userName = formCadastro["input-usuario"].value;
	const passWord = formCadastro["input-senha"].value;

	emitirCadastroUsuario({ userName, passWord });
});
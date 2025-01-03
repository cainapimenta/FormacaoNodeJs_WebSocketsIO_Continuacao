import { emitirCadastroUsuario } from "./socket-front-cadastro.js";

const formCadastro = document.getElementById("form-cadastro");

formCadastro.addEventListener("submit", (event) => {
	event.preventDefault();

	const usuario = formCadastro["input-usuario"].value;
	const password = formCadastro["input-senha"].value;

	emitirCadastroUsuario({ usuario, password });
});
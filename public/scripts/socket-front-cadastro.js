const socket = io();

function emitirCadastroUsuario(dados) {
	socket.emit("cadastrar_usuario", dados);
}

export { emitirCadastroUsuario };
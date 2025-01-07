const socket = io();

function emitirCadastroUsuario(dados) {
	socket.emit("cadastrar_usuario", dados);
}

socket.on("cadastrar_usuario_sucesso", () => alert("Cadastro de usuário realizado com sucesso!"));
socket.on("cadastrar_usuario_error", (msg) => alert(msg));

export { emitirCadastroUsuario };
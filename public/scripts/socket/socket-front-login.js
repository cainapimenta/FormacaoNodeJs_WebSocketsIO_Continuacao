const socket = io();

function emitirAutenticarUsuario(dados) {
	socket.emit("autenticar_usuario", dados);
}

socket.on("autenticar_usuario", () => {
	alert("Usuário autenticado com sucesso!");
	window.location.href = "/";
});

socket.on("autenticar_usuario_erro", () => {
	alert("Falha ao autenticar usuário");
});

export { emitirAutenticarUsuario };
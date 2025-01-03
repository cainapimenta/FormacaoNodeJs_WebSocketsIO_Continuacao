import { addUsuario, getUsuario } from "../db/usuariosDb.js";

function registerEventCadastrar(socket, io) {
	socket.on("cadastrar_usuario", async (dados) => {
		const usuario = await getUsuario(dados.userName);

		if (usuario === null) {
			const resultado = await addUsuario(dados)

			if (resultado.acknowledged) {
				socket.emit("cadastrar_usuario_sucesso");
			} else {
				socket.emit("cadastrar_usuario_error", `Erro ao cadastrar usuario ${dados.userName}`);
			}
		} else {
			socket.emit("cadastrar_usuario_error", `Usuario ${dados.userName} já cadastrado`);
		}
	});
}

export default registerEventCadastrar;
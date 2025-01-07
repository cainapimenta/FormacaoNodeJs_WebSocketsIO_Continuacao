import { getUsuario } from "../db/usuariosDb.js";

function registerEventLogin(socket, io) {
	socket.on("autenticar_usuario", async ({ userName, password }) => {
		const usuario = await getUsuario(userName);

		console.log(usuario);
	});
}

export default registerEventLogin;
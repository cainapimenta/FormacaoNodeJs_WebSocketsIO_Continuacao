import { getUsuario } from "../db/usuariosDb.js";
import { autenticarUsuario } from "../util/passwordUtil.js";

function registerEventLogin(socket, io) {
	socket.on("autenticar_usuario", async ({ userName, password }) => {
		const usuario = await getUsuario(userName);

		if (usuario) {
			const usuarioAutenticado = autenticarUsuario(password, usuario);

			if (usuarioAutenticado) {
				socket.emit("autenticar_usuario_sucesso");
			} else {
				socket.emit("autenticar_usuario_erro");
			}
		} else {
			socket.emit("autenticar_usuario_erro");
		}
	});
}

export default registerEventLogin;
import { randomBytes, scryptSync } from "crypto";

function createSalAndHashPassword(password) {
	const salPassword = randomBytes(16).toString("hex");
	const hashPassword = scryptSync(password, salPassword, 64).toString("hex");

	return { salPassword, hashPassword };
}

function autenticarUsuario(password, usuario) {
	const hashTeste = scryptSync(password, usuario.salPassword, 64);
	const hashReal = Buffer.from(usuario.hashPassword, "hex");

	const usuarioAutenticado = hashReal == hashTeste;

	return usuarioAutenticado;
}

export { createSalAndHashPassword, autenticarUsuario };
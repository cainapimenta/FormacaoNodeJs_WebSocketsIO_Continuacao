import { createSalAndHashPassword } from "../util/passwordUtil.js";
import { usuarioCollection } from "./dbConnector.js";

function getUsuario(userName) {
	return usuarioCollection.findOne({ userName: userName });
}

function addUsuario({ userName, passWord }) {
	const { salPassword, hashPassword } = createSalAndHashPassword(passWord);

	return usuarioCollection.insertOne({ userName: userName, hashPassword: hashPassword, salPassword: salPassword });
}

export { getUsuario, addUsuario };
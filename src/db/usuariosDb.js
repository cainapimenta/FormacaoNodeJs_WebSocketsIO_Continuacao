import { usuarioCollection } from "./dbConnector.js";

function getUsuario(userName) {
	return usuarioCollection.findOne({ userName: userName });
}

function addUsuario({ userName, passWord }) {
	return usuarioCollection.insertOne({ userName: userName, passWord: passWord });
}

export { getUsuario, addUsuario };
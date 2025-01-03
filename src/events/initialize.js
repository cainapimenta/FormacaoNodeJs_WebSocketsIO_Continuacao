import { addDocumento, getDocumento, getDocumentos } from '../db/documentosDb.js';

function registerEventInit(socket, io) {
	socket.on("adicionar_documento", async (nome) => {
		const documentoExiste = (await getDocumento(nome)) !== null;

		if (documentoExiste) {
			socket.emit("documento_existente", nome);
		} else {
			const resultado = await addDocumento(nome);

			if (resultado.acknowledged) {
				io.emit("adicionar_documento_interface", nome);
			}
		}
	});

	socket.on("obter_documentos", async (devolverDocumentos) => {
		const documentos = await getDocumentos();

		devolverDocumentos(documentos);
	});
}

export default registerEventInit;
import { deleteDocumento, getDocumento, updateDocumento } from '../db/documentosDb.js';

function registerEventDocuments(socket, io) {
	socket.on("selecionar_documento", async ({ nomeDocumento }, devolverTexto) => {
		socket.join(nomeDocumento);

		const documento = await getDocumento(nomeDocumento);

		if (documento) {
			devolverTexto(documento.texto);
		}
	});

	socket.on("excluir_documento", async (nome) => {
		const resultado = await deleteDocumento(nome);

		if (resultado.deletedCount) {
			io.emit("documento_excluido_sucesso", nome);
		}
	});

	socket.on("keyUp_editorTexto", async ({ texto, nomeDocumento }) => {
		const infoUpdate = await updateDocumento(nomeDocumento, texto);

		if (infoUpdate.modifiedCount) {
			socket.to(nomeDocumento).emit("keyUp_editorTexto_client", texto);
		}
	});
}

export default registerEventDocuments;
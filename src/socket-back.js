import registerEventDocuments from './events/documents.js';
import registerEventInit from './events/initialize.js';
import registerEventCadastrar from './events/cadastrar.js';

import io from './server.js';

io.on("connection", (socket) => {
	registerEventInit(socket, io);
	registerEventDocuments(socket, io);
	registerEventCadastrar(socket, io);
});
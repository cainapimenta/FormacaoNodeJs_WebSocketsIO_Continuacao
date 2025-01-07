import registerEventDocuments from './events/documents.js';
import registerEventInit from './events/initialize.js';
import registerEventCadastrar from './events/cadastrar.js';
import registerEventLogin from './events/login.js';

import io from './server.js';

io.on("connection", (socket) => {
	registerEventInit(socket, io);
	registerEventCadastrar(socket, io);
	registerEventLogin(socket, io);
	registerEventDocuments(socket, io);
});
import registerEventDocuments from './events/registerEventDocuments.js';
import registerEventInit from './events/registerEventInit.js';
import io from './server.js';

io.on("connection", (socket) => {
	registerEventInit(socket, io);
	registerEventDocuments(socket, io);
});
import { WebSocketServer, WebSocket, createWebSocketStream } from 'ws';
import * as dotenv from 'dotenv';
import { env } from 'process';
import { httpServer } from './http';
import { actionsFromCommand, Commands } from './commands';
import { NoCommandError } from './errors';

dotenv.config();

httpServer.listen(
    parseInt(env.HTTP_PORT ?? '8181'),
    () => { console.log(` ✨ HTTP server is running on ${env.HTTP_PORT} port`)}
);

const wss = new WebSocketServer({ port: parseInt(env.WEBSOCKET_PORT ?? '8182') });

wss.on('connection', (ws: WebSocket) => {
    console.log(` 🚀 Connection with ${env.WEBSOCKET_PORT} port`);

    ws.on('close', () => {
        console.log(`Goodbye from ws on ${env.WEBSOCKET_PORT} ✋🏻`);
    });

    const duplex = createWebSocketStream(ws, {
        decodeStrings: false,
        defaultEncoding: 'utf8'
    });

    duplex.on('data', async (fullCommand: string) => {
        try {
            const [command, ...coordinates] = fullCommand.toString().split(' ');

            console.log(`Received command: ${command}`);

            if (typeof actionsFromCommand[(command as Commands)] !== 'function') {
                throw new NoCommandError();
            }

            const results = await actionsFromCommand[(command as Commands)](coordinates);
            
            console.log(`Command result: ${results}`);

            duplex.write(results);
        } catch (error) {
            console.error((error as Error)?.message);
        }
    });
});

process.on('SIGINT', () => {
    console.log('\n Goodbye ✋🏻');

    wss.clients.forEach((client) => {
        client.close();
    });

    wss.close();
    httpServer.close();
    process.exit(0);
});
const express = require("express");
const { WebSocketServer } = require("ws");

const app = express();
const port = 8090;

const server = app.listen(port, () => {
    console.log("server is listening....");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        const message = JSON.parse(data.toString());
        console.log(`Received message from ${message.username}: ${message.text}`);

        // Broadcast the message to all connected clients
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === ws.OPEN) {
                client.send(JSON.stringify(message));
            }
        });
    });
});
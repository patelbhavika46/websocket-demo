# Simple WebSocket Chat Application

This is a real-time, multi-user chat application built to demonstrate the core principles of WebSocket communication. It consists of a Node.js server that handles message broadcasting and a simple HTML client that allows users to send and receive messages in real-time.

### Features
- Real-Time Messaging: Messages are instantly sent and received by all connected clients.

- Multi-User Support: Multiple clients can connect to the server and chat with each other.

- Server-Side Broadcasting: The server receives a message from one client and efficiently broadcasts it to all others.

- Simple Frontend: The client-side application is a single, self-contained HTML file, making it easy to run and test.

### Prerequisites
To run this application, you need to have the following installed on your machine:

- Node.js: https://nodejs.org/

- npm: Comes bundled with Node.js.

### Getting Started
Follow these simple steps to get the chat application up and running.

### Project Structure
Ensure your project files are organized as follows:

```
.
/websocket-demo
├── server/
│   ├── index.js
│   └── package.json
└── client
    └── websocket-client.html
import express from 'express';
import path from 'path'
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limited: '50mb', extended: true }));

const convoArray = [];

io.on('connection', (socket) => {
    socket.emit('convoArray', convoArray);
    socket.on('user_message', (payload) => {
        const data = payload;
        convoArray.push(data);
        convoArray.forEach(ar=>{
            console.log('name: ' + ar.name, ar.message);
        })
        io.emit('convoArray', convoArray);
        // socket.broadcast.emit('convoArray', convoArray);
    });

    
    socket.on('disconnect', () => {
        console.log('user disconnected 2');
    });
})

// {
//     "content":{
//         "id":1735905930560,
//         "name":"red",
//         "message":"asdd",
//         "time":"8:05:30 PM",
//         "sender":"user"
//     }
// }

server.listen(8000,()=>{
    console.log("8000 up!");
});


const express = require('express')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const path = require('path');

const test = new Map()
const rooms = new Map()


const port = process.env.PORT || 5000;
app.use(express.static('build'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
app.listen(port, () =>
    console.log(`Server is running on: http://localhost:${port}`));

// app.use(express.json())
//
// app.get('/rooms/:id', (req, res) => {
//     const {id: roomId} = req.params;
//     const obj = rooms.has(roomId)
//         ? {
//             users: [...rooms.get(roomId).get('users').values()],
//             messages: [...rooms.get(roomId).get('messages').values()],
//         }
//         : {users: [], messages: []};
//     res.json(obj);
// });
//
// app.get('/', (req, res) => {
//     res.json(test)
// })
//
//
// app.post('/rooms', (req, res) => {
//     const {roomId, userName} = req.body;
//     if (!rooms.has(roomId)) {
//         rooms.set(
//             roomId,
//             new Map([
//                 ['users', new Map()],
//                 ['messages', []],
//             ]),
//         );
//     }
//     res.send();
// });
//
// io.on('connection', (socket) => {
//     socket.on('ROOM:JOIN', ({roomId, userName}) => {
//         socket.join(roomId);
//         rooms.get(roomId).get('users').set(socket.id, userName);
//         const users = [...rooms.get(roomId).get('users').values()];
//         socket.broadcast.to(roomId).emit('ROOM:SET_USERS', users);
//     });
//
//     socket.on('ROOM:NEW_MESSAGE', ({roomId, userName, text}) => {
//         const obj = {
//             userName,
//             text,
//         };
//         rooms.get(roomId).get('messages').push(obj);
//         socket.broadcast.to(roomId).emit('ROOM:NEW_MESSAGE', obj);
//     });
//
//     socket.on('disconnect', () => {
//         rooms.forEach((value, roomId) => {
//             if (value.get('users').delete(socket.id)) {
//                 const users = [...value.get('users').values()];
//                 socket.broadcast.to(roomId).emit('ROOM:SET_USERS', users);
//             }
//         })
//
//     })
//
//     console.log('user connected', socket.id)
// })
//
// server.listen(5000, (err) => {
//     if (err) {
//         throw Error(err)
//     }
//     console.log('Start server')
// })
import { Server } from 'socket.io';
let users = [];

const io = new Server({ 
    cors: {
        origin: 'http://localhost:5173'
    }
})

const removeUser = (socketId) => {
    users = users.filter((val) => val.socketId !== socketId)
}

const getUserId = (username) => {
    const details = users.find((val) => val.username === username);
    return details
}

const addUser = (username, socketId) => {
    !users.some((user) => user.username === username) && users.push({ username, socketId });
}

io.on('connection', (socket) => {
    
    socket.on('newUser', (username) => {
        addUser(username, socket.id);
    })

    socket.on('sendNotification', (values) => {
        const { user, receiver, type } = values;
        const receiverDetails = getUserId(receiver);
        io.to(receiverDetails.socketId).emit('getNotification', {
            user,
            type
        })
    })

    socket.on('disconnect', () => {
        removeUser(socket.id);
        // console.log(users, "<--- after disconnect <---");
    })
})

io.listen(3000);
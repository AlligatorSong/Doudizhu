const socket = require('socket.io');
const app = socket('3000');

app.on('connection',function(socket){
    console.log('a user connected');
    socket.emit('hello', 'hello')
    socket.on('login', function (data) {
        console.log('a login = '+JSON.stringify(data),data.uniqueID);
    } );
});

console.log('listen on 3000');

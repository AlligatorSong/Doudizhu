const socket = require('socket.io');
const app = socket('3000');
const mydb = require('./utility/db');
const config = require('./utility/config.json');
mydb.connect(config.mysqlConfig);
mydb.checkPlayer('10000',function (err, cb) {
    console.log('mydb.checkPlayer = '+err);
});

app.on('connection',function(socket){
    console.log('a user connected');
    socket.emit('hello', 'hello')
    socket.on('login', function (data) {
        console.log('a login = '+JSON.stringify(data));
    } );
});

console.log('listen on 3000');

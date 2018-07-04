var define = require('../define');

var SocketController = function () {
    this.socket;
};

SocketController.prototype.init = function () {
    this.socket = io(define.serverURL)
    this.socket.on('hello',function(data){
        console.log('a hello = '+JSON.stringify(data));
    });
};

SocketController.prototype.login = function (uniqueID,nickName,cb) {
    console.log('global--2222222');
    this.socket.emit('login',{
        uniqueID: uniqueID,
        nickName: nickName
    });
};

module.exports = SocketController;
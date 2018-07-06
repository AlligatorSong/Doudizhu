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
    let temp = {
        uniqueID: uniqueID,
        nickName: nickName
    }
    this.socket.emit('login',temp);
};

module.exports = SocketController;
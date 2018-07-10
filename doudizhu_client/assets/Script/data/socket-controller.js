let define = require('../define');

let SocketController = function () {
    this.socket;
    this._callBackIndex = 1;
    this._callBackArray = {};
};

SocketController.prototype.init = function () {
    let self = this;
    self.socket = io(define.serverURL)
    self.socket.on('notify', function (res) {
        console.log('on notify = ' + JSON.stringify(res));
        let callBackIndex = res.callBackIndex;
        console.log('callBackIndex= ' + JSON.stringify(self._callBackArray));
        let cb = self._callBackArray[callBackIndex];
        if (cb) {
            let err = res.data.err
            if (err) {
                cb(err);
            } else {
                cb(null, res.data);
            }
        }
        self._callBackArray[callBackIndex] = undefined
    });
};

SocketController.prototype.login = function (playerData, cb) {
    this.request('login', playerData, cb);
};

SocketController.prototype.onLogin = function (data) {
    
};

SocketController.prototype.notify = function (msg, data) {
    console.log('emit notify = ' + data.msg + JSON.stringify(data));
    this.socket.emit('notify', {
        msg: msg,
        callBackIndex: this._callBackIndex,
        data: data
    });
    this._callBackIndex++;
};

SocketController.prototype.request = function (msg, data, cb) {
    this._callBackArray[this._callBackIndex] = cb;
    this.notify(msg, data)
};

module.exports = SocketController;
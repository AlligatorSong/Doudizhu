let Player = require('./player');

let PlayerController = function () {

}
let _playerList = new Map();

PlayerController.prototype.createPlayer = function (socket,callBackIndex, data) {
    console.log('createPlayer = lalalalal' + JSON.stringify(data));
    let playerData = _playerList.get(data.uniqueID);
    if (playerData === undefined) {
        playerData = new Player(socket, data);
        _playerList.set(data.uniqueID, data);
    }
    socket.emit("notify", {
        msg: "login",
        callBackIndex: callBackIndex,
        data: data
    });
};

module.exports = PlayerController;
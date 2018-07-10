let Player = function (socket, data) {
    this.socket = socket;
    this.uid = data.uid;
    this.uniqueID = data.uniqueID;
    this.nickName = data.nickName;
    this.houseCardCount = data.houseCardCount;
}

// Player.prototype.createPlayer = function (socket,data) {

// };

module.exports = Player;
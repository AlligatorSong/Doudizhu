var PlayerData = require('./player-data');

var PlayerDataController = function () {
    this.playerData = new PlayerData()
};

// PlayerDataController.prototype.wxloginSuccess = function (data) {
//     this.uniqueID = data.uniqueID
// };
module.exports = PlayerDataController;
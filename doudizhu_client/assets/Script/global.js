var SocketController = require('./data/socket-controller');
var PlayerDataController = require('./data/player-data-controller');

const global = {};
global.lalala = 'llalalal'
global.socketController = new SocketController();
global.playerDataController = new PlayerDataController();

module.exports = global;
let DB = require('./utility/db');
let PlayerController = require('./game/player-controller');
const config = require('./utility/config.json');

const global = {};
global.myDB = new DB();
global.myDB.connect(config.mysqlConfig);

global.playerController = new PlayerController();

module.exports = global;
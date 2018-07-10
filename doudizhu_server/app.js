const socket = require('socket.io');
const app = socket('3000');
let global = require('./global');
const myDB = global.myDB;
const playerController = global.playerController;


app.on('connection', function (socket) {
    console.log('a user connected');
    socket.emit('hello', 'hello')
    socket.on('notify', function (res) {
        let msg = res.msg
        let callBackIndex = res.callBackIndex
        console.log('on notify = ' + msg + JSON.stringify(res));
        switch (msg){
            case "login":
                let loginData = res.data
                myDB.checkPlayer(loginData.uniqueID, function (err, data) {
                    if (err) {
                        console.log(' myDB.checkPlayer err = ' + err);
                    } else {
                        let playerData = {};
                        if (data.length === 0) {
                            loginData.houseCardCount = 5
                            myDB.insertSql(loginData)
                        } else {
                            myDB.updatePlayerDataSql(
                                {
                                    unique_id: loginData.uniqueID,
                                },
                                {
                                    uid: loginData.uid,
                                    nick_name: loginData.nickName
                                }
                            )
                        }
                        playerController.createPlayer(socket,callBackIndex, loginData);
                    }
                });
                break;
            default:
                break;
        }
    });
});

console.log('listen on 3000');

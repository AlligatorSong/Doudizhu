let global = require('../global');

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        global.socketController.init();
        global.socketController.onLogin();
    },
    buttonClick: function (event ,customData) {
        if (customData==='wxlogin'){
            let playerData =  global.playerDataController.playerData
            let data = {
                uid:playerData.uid,
                uniqueID:playerData.uniqueID,
                nickName:playerData.nickName,
                houseCardCount:playerData.houseCardCount,
            }
            let callBcak = function (err,data) {
                if(err){
                    console.log('err ',err);
                }else{
                    console.log('data ',JSON.stringify(data));
                }
            }
            global.socketController.login(
                data,
                callBcak
            )
        }
    }
});

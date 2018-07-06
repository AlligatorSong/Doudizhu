var global = require('../global');

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        global.socketController.init();
    },
    buttonClick: function (event ,customData) {
        if (customData==='wxlogin'){
            let playerData =  global.playerDataController.playerData
            global.socketController.login(
                playerData.uniqueID,
                playerData.nickName,
                function (err,data) {
                    if(err){
                        console.log('err ',err);
                    }else{
                        console.log('data ',JSON.stringify(data));
                    }
                }
            )
        }
    }
});

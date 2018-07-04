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
            console.log('global--111wxlogin');
            global.socketController.login(
                global.playerDataController.uniqueID,
                global.playerDataController.nickName,
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

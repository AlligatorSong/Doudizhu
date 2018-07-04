

var PlayerData = function () {
    this.uid = undefined;
    this.uniqueID = 10000;
    this.nickName = 'Alligator';
    // this.iconURL = 'Alligator';
};

//微信登录成功
PlayerData.prototype.wxloginSuccess = function (data) {
    this.uniqueID = data.uniqueID
};

//服务端登录成功
PlayerData.prototype.serverloginSuccess = function (data) {
};

module.exports = PlayerData;
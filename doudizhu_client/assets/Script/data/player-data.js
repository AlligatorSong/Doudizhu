

let PlayerData = function () {
    this.uid = '10000';
    this.uniqueID = '10000';
    this.nickName = '鳄鱼';
    this.houseCardCount = 5
    // this.avatarUrl = 'Alligator';
};

//微信登录成功
PlayerData.prototype.wxloginSuccess = function (data) {
    this.uniqueID = data.uniqueID
};

//服务端登录成功
PlayerData.prototype.serverloginSuccess = function (data) {
};

module.exports = PlayerData;
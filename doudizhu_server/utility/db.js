const mysql = require('mysql');

let client;
const query = function (sql, cb) {
    console.log('sql = ' + sql);
    client.getConnection(function (err, connection) {
        if (err){
            console.log('connection mysql err = ' + err);
            cb(err);
            throw err;
        }else{
            connection.query(sql,function (connerr, result, fileds) {
                if (connerr){
                    console.log('query err = ' + connerr);
                    cb(connerr);
                }else{
                    cb(null, result)
                }
                connection.release();
            });
        };
    });
}

var DB = function () {
    client;
};

DB.prototype.connect = function (config) {
    client = mysql.createPool(config);
};

DB.prototype.checkPlayer = function (uniqueID, cb) {
    let sql = 'select * from t_playerinfo where unique_id = ' + uniqueID + ';';
    query(sql,function (err, data) {
        if (err){
            console.log('DB.prototype.checkPlayer err = ' + err);
        }else{
            console.log('check player = ' + JSON.stringify(data));
        }
    })
};

// DB.prototype.login = function (config) {
//     client = mysql.createPool(config);
// };

module.exports =new DB();
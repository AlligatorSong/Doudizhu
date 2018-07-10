const mysql = require('mysql');

const playerInfoTabelName = "t_playerinfo"

let client;

const query = function (sql, cb) {
    console.log('sql = ' + sql);
    client.getConnection(function (err, connection) {
        if (err) {
            console.log('connection mysql err = ' + err);
            cb(err);
            throw err;
        } else {
            connection.query(sql, function (connerr, result, fileds) {
                if (connerr) {
                    console.log('query err = ' + connerr);
                    cb(connerr);
                } else {
                    cb(null, result)
                }
                connection.release();
            });
        };
    });
}

let DB = function () {

};

DB.prototype.connect = function (config) {
    client = mysql.createPool(config);
};

const insertSql = function (tableName, data) {
    console.log('insertSql data = ' + JSON.stringify(data));
    let sql = ''
    let strName = ''
    let strValue = ''
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            let element = data[key];
            strName += key + ",";
            if (typeof (element) === 'string') {
                element = "\'" + element + "\'";
            }
            strValue += element + ",";
        }
    }
    strName = strName.substring(0, strName.length - 1);
    strValue = strValue.substring(0, strValue.length - 1);
    // INSERT INTO tbl_name (col1,col2) VALUES(15,col1*2);
    sql = " INSERT INTO " + tableName + " (" + strName + ") VALUES" + "(" + strValue + ");"
    console.log('sql = ' + sql);
    return sql
};

DB.prototype.insertSql = function (data) {
    let tempData = {
        unique_id: data.uniqueID,
        uid: data.uid,
        nick_name: data.nickName,
        house_card_count: data.houseCardCount
    };
    let sql = insertSql(playerInfoTabelName, tempData)

    query(sql, function (err, data) {
        if (err) {
            console.log('insertSql = ' + err);
        } else {
            console.log('insertSql = ' + JSON.stringify(data));
        }
    });
};

DB.prototype.checkPlayer = function (uniqueID, cb) {
    let sql = 'select * from ' + playerInfoTabelName + ' where unique_id = ' + uniqueID + ';';
    query(sql, function (err, data) {
        if (err) {
            console.log('DB.prototype.checkPlayer err = ' + err);
        } else {
            console.log('player info = ' + JSON.stringify(data));
            cb(err, data);
        }
    })
};

const updateSql = function (tableName, confitionData, updateData) {
    // update t_playerinfo set nick_name = 'lala', avatar_url = 'baidu.com' where unique_id = '10000';
    let sql = '';
    let formatDes = function (data) {
        let word = ''
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                let element = data[key];
                if (typeof (element) === 'string') {
                    element = "\'" + element + "\'";
                };
                word += (key + " = " + element + ",");
            };
        };
        return word.substring(0, word.length - 1);
    };
    let updateDes = formatDes(updateData);
    let conditionDes = formatDes(confitionData);


    sql = " update " + tableName + " set " + updateDes + " where " + conditionDes + ";";
    return sql
};

DB.prototype.updatePlayerDataSql = function (confitionData, updateData, cb) {
    let sql = updateSql(playerInfoTabelName, confitionData, updateData);
    console.log('insertSql = ' + sql);

    query(sql, function (err, data) {
        if (err) {
            console.log('updatePlayerDataSql = ' + err);
        } else {
            console.log('updatePlayerDataSql = ' + JSON.stringify(data));
        }
    });
};


// DB.prototype.login = function (config) {
//     client = mysql.createPool(config);
// };

module.exports = DB;
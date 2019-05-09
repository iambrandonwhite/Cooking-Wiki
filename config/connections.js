var mysql = require('mysql');
 var connection = mysql.createConnection({
    host: 'pwcspfbyl73eccbn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    database: 'zbvnutgh6ya4wwus',
    user: 'un3w9shcb8vsetqf',
    password: 'o5pjtqt2o1z34ud0',
    port: 3306
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
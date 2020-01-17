let express = require('express');
let app = express();
// tslint:disable-next-line: only-arrow-functions
app.get('/', function(req, res) {
    let sql = require('mssql');
    // config for your database
    const config = {
        user: 'JessieSCN',
        password: 'Jscn5509',
        server: 'PC',
        database: 'SCNDB'
    };
    // connect to your database
    // tslint:disable-next-line: only-arrow-functions
    sql.connect(config, function(err) {
        if (err) { console.log(err); }
        // create Request object
        let request = new sql.Request();
        // query to the database and get the records
        // tslint:disable-next-line: only-arrow-functions
        request.query('select distinct * from Producto', function(err, recordset) {
            if (err) { console.log(err); }
            // send records as a response
            res.send(recordset);
        });
    });
    sql.close();
});
// tslint:disable-next-line: only-arrow-functions
let server = app.listen(4200, function() {
    console.log('Server is running..');
});

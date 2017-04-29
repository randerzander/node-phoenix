var jdbcReq = require('jdbc')
var jinst = require('jdbc/lib/jinst');

if (!jinst.isJvmCreated()) {
    jinst.addOption("-Xrs");
    jinst.setupClasspath(['./Drivers/phoenix-4.9.0-HBase-1.1-client.jar']);
}

var config1 = {
    libpath: './Drivers/phoenix-4.4.0.2.4.3.0-225-client.jar',
    drivername: 'org.apache.phoenix.jdbc.PhoenixDriver',
    url: 'jdbc:phoenix:localhost'
}

var jdbc = new jdbcReq(config1);
console.log(jinst.getInstance());

// initialize the connection object
jdbc.initialize( function (err, res) {
    if (err) {
        console.log(err);
    }
});

jdbc.reserve(function (err, connObj) {
    if (connObj) {
        console.log("Got Conn");
        console.log("Using conn: " + connObj.uuid)
        //Run the insert query
        conn = connObj.conn;
        conn.createStatement(function(err, statement) {
            if (err) {
                console.log(err);
            } else {
                statement.executeQuery("SELECT * FROM WEB_STAT", function(err, resultset) {
                    if (err) {
                        console.log(err)
                    } else {
                        // Convert the result set to an object array.
                        resultset.toObjArray(function(err, results) {
                            if (results.length > 0) {
                                for (var i = 0, len = results.length; i < len; i++) {
                                    console.log("ID: " + results[i].DOMAIN);
                                }
                            }
                            if (err)
                                console.log("error in conversion to objArray " + err)
                        });
                    }
                });
            }
        });
    } else {
        console.log('Connection object:' + conn);
        console.log(err);
    }
});
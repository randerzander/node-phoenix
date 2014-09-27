var jdbc = new (require('jdbc'));

var config = {
  libpath: '/usr/lib/phoenix/phoenix-client.jar',
  drivername: 'org.apache.phoenix.jdbc.PhoenixDriver',
  url: 'jdbc:phoenix:' + process.argv[2] //example: localhost:2181:/hbase-unsecure
}

//Initialize jdbc object
jdbc.initialize(config, function(err, res){ if (err){ console.log(err); } });

jdbc.open(function(err, conn) {
  if (conn) {
    jdbc.executeQuery('SELECT * FROM web_stat', function(err, results){
      if (err){ console.log(err); }
      else if (results) { console.log(results); }
    });
  }else{
    console.log('Connection object:' + conn);
    console.log(err);
  }
});

jdbc.close(function(err){
  if(err) { console.log(err); }
  else { console.log('Connection closed successfully!');}
});

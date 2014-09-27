Setup:
```
git clone https://github.com/randerzander/node-phoenix
cd node-phoenix
npm install

#Make sure you've created the web_stat tables- From /usr/lib/phoenix:
./psql.py localhost:2181:/hbase-unsecure /usr/share/doc/phoenix-4.0.0.$version/examples/WEB_STAT.sql /usr/share/doc/phoenix-4.0.0.$version/examples/WEB_STAT.csv /usr/share/doc/phoenix-4.0.0.$version/examples/WEB_STAT_QUERIES.sql

node server.js localhost:2181:/hbase-unsecure
```

require('dotenv').config();
const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const app = express();
const port = process.env.PORT || 3000;

// config template engine
configViewEngine(app);

// khai bao router
app.use('/',webRoutes);

// test connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'quochuy'
});

// query 
connection.execute(
  'SELECT * FROM Users u ',
  ['Rick C-137', 53],
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

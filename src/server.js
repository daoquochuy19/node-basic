require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const app = express();
const port = process.env.PORT || 3000;

// config template engine
configViewEngine(app);

// khai bao router
app.use('/',webRoutes);



// query 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

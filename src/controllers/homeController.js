const connection = require('../config/database');
const getHomepage = (req, res) => {
    connection.query(
        'SELECT * FROM Users u ',
        function(err, results, fields) {
          res.send(JSON.stringify(results))
        }
      );
}

const getABC = (req, res) => {
    res.render('sample.ejs')
}

module.exports ={
    getHomepage,getABC
}
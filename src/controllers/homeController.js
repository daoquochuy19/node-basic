const connection = require('../config/database');


const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.render('sample.ejs')
}

const addUser = async (req, res) => {
  let email = req.body.email
  let name = req.body.name
  let city = req.body.city

//   callback function
//   connection.query(
//     `INSERT INTO 
//     Users (email, name, city) VALUES (?,?,?)`,
//     [email,name,city],
//     function(err, results){
//         console.log(results);
//         res.send('Created user succeed')
//     }
//   )

// async, await
let [results, fields]= await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,   [email,name,city],
)
}

const getCreatePage = (req, res) =>{
    res.render('create.ejs')
}

module.exports ={
    getHomepage,getABC, addUser, getCreatePage
}
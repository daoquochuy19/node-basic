const getHomepage = (req, res) => {
    res.send('Hello World HIiiiii!')
}

const getABC = (req, res) => {
    res.render('sample.ejs')
}

module.exports ={
    getHomepage,getABC
}
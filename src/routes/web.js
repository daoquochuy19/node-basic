const express = require('express');
const { getHomepage, getABC, addUser, getCreatePage} = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/create', getCreatePage)
router.post('/add-user', addUser)

module.exports = router;
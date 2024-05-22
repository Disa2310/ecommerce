var express = require('express');
var router = express.Router();
var user=  require('../user_controller/add_user_controller')
var user_login = require('../user_controller/user_login_controller')
var add_cart = require("../user_controller/get_user_cart_controller")

/* GET users listing. */
router.post('/insert_user_login', user_login.insert);
router.get('/user_login', user_login.get_data);
router.post('/login', user_login.login);
// add user

router.post('/add_user', user.insert);


//update product

router.post('/update_user/:id', user.update_data);

//delete product 

router.get('/delete_user/:id', user.delete_data);

// get all user
router.get('/get_all_user', user.get_data);

// get single user
router.get('/get_single_user/:id', user.single_data);

// get search user
router.get('/search_user/:name', user.search_user);

// get all user
router.get('/get_cart', add_cart.get_data);

// get users cart
router.get('/insert_add_cart/:p_id', add_cart.insert);
router.get('/get_cart', add_cart.get_data);

//update product

router.post('/update_cart/:id', user.update_data);

//delete product 

router.get('/delete_cart/:id', user.delete_data);


module.exports = router;

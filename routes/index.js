var express = require('express');
var router = express.Router();

var admin_login = require('../admin_controller/login_controller');
var product = require('../admin_controller/product_controller');
var categories = require('../admin_controller/categories_controller');



/* GET home page. */
router.post('/insert', admin_login.insert);
router.get('/select', admin_login.get_data);
router.post('/login', admin_login.login);

//add product

router.post('/insert_product', product.insert);



//update product

router.post('/update_product/:id', product.update_data);

//delete product 

router.get('/delete_product/:id', product.delete_data);


// get all product
router.get('/get_all_product', product.get_data);

// get single product
router.get('/get_single_product/:id', product.single_data);

// get search product
router.get('/search_product/:title', product.search_product);

// categories 
router.post('/categories', categories.insert);
router.get('/get_all_categories', categories.get_data);

// categories 
router.get('/product_categories/:category', product.category);
module.exports = router;

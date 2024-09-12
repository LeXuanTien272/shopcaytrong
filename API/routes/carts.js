var express = require('express');
var router = express.Router();

// http://localhost:8080/carts

const ControllerCart = require('../controllers/carts/ControllerCart');


// Thêm giỏ hàng mới
// method : POST
// body: { user, products }
// url: http://localhost:8080/carts
// return: { _id, user, product, total, status, date }
router.post('/', async (req, res, next) => {
    try {
        const { user, products} = req.body;
        const result = await ControllerCart.addCart(user, products);

        return res.status(200).json({ status: true, data: result });
    } catch (error) {
        return res.status(400).json({ status: false, data: error.message });
    }
})

// Get giỏ hàng
// method : POST
// body: { user, products }
// url: http://localhost:8080/carts
// return: { _id, user, product, total, status, date }

module.exports = router;
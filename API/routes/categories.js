var express = require('express');
var router = express.Router();
const ControllerCategories = require('../controllers/categories/ControllerCategories');

//http://localhost:9999/categories?page=1&limit=5&keyword=.....
router.get('/', async function (req, res, next) {
    try {
        const page = req.query.page;
        const limit = req.query.limit;
        const keyword = req.query.keyword;
        const categories = await ControllerCategories.getCategories(page, limit, keyword);
        return res.status(200).json({ status: true, data: categories });
    } catch (error) {
        console.log('Lấy tất tat cả danh muc lỗi: ', error);
        return res.status(500).json({ status: false, error: error });
    }
})

module.exports = router;

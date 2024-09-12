const ModelCategory = require('./ModelCategory');

//getcate
const getCategories = async (page, limit, keyword) => {
    try {
        page = parseInt(page) || 1;
        limit = parseInt(limit) || 10;
        let skip = (page - 1) * limit;
        let sort = { create_at: -1 };// 1: tăng dần, -1: giảm dần
        // query : điều kiện tìm kiếm
        let query = {};// nếu là 1 object rõng là không có điều kiện tìm kiếm
        query = {
            ...query,

        }


        let categories = ModelCategory
            .find(query)
            // Bỏ qua bao nhiêu sản phẩm
            .skip(skip)
            // Giới hạn số lượng sản phẩm 
            .limit(limit)
            // Sắp xếp theo thời gian tạo
            .sort(sort);

        return categories;

    } catch (error) {
        console.log('Lấy tất cả sản phẩm lỗi: ', error);
        throw new Error('Lấy tất cả sản phẩm lỗi');
    }
    return [];
}

module.exports ={getCategories}
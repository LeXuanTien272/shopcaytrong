const ModelProduct = require('./ModelProduct');
const ModelCategory = require('../categories/ModelCategory');



// page: trang hiện tại
// limit: số lượng sản phẩm trên 1 trang
// keyword: từ khóa tìm kiếm
const getAll = async (page, limit, keyword) => {
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


        let products = ModelProduct
            .find(query)
            // Bỏ qua bao nhiêu sản phẩm
            .skip(skip)
            // Giới hạn số lượng sản phẩm 
            .limit(limit)
            // Sắp xếp theo thời gian tạo
            .sort(sort);

        return products;

    } catch (error) {
        console.log('Lấy tất cả sản phẩm lỗi: ', error);
        throw new Error('Lấy tất cả sản phẩm lỗi');
    }
    return [];
}

// thêm sản phẩm
const insertDB = async (name, price, quantity, images, description, category_id) => {
    try {
        //kiểm tra danh mục có tồn tại không
        // select * from categories where_id = category_id
        const categoryDB = await ModelCategory.findById(category_id);
        if (!categoryDB) {
            throw new Error('Danh mục không tồn tại');
        }
        const product = new ModelProduct({
            name: name,
            price: price,
            quantity: quantity,
            images: images,
            description: description,
            category: {
                category_id: categoryDB._id,
                category_name: categoryDB.name
            }
        });

        let result = await product.save();
        return result;
    } catch (error) {
        console.log('Thêm sản phẩm lỗi: ', error);
        throw new Error('Thêm sản phẩm lỗi');
    }
}

// cập nhật sản phẩm theo id
const updateDB = async (id, name, price, quantity, images, description, category_id) => {
    try {
        // Kiểm tra sản phẩm có tồn tại không
        const productDB = await ModelProduct.findById(id);
        if (!productDB) {
            throw new Error('Sản phẩm không tồn tại');
        }
        //kiểm tra danh mục có tồn tại không
        const categoryDB = await ModelCategory.findById(category_id);
        if (!categoryDB) {
            throw new Error('Danh mục không tồn tại');
        }

        // Cập nhật sản phẩm
        productDB.name = name || productDB.name;
        productDB.price = price || productDB.price;
        productDB.quantity = quantity || productDB.quantity;
        productDB.images = images || productDB.images;
        productDB.description = description || productDB.description;
        productDB.category = {
            category_id: categoryDB._id,
            category_name: categoryDB.name
        }

        let result = await productDB.save();
        return result;
    } catch (error) {
        console.log('Cập nhật sản phẩm lỗi: ', error);
        throw new Error('Cập nhật phẩm lỗi');
    }
}

// Tìm sản phẩm theo ten
const findProduct = async (name) => {
    try {
        if (name) {
            const productName = name.toUpperCase().trim();
            const productDB = await ModelProduct.find({ name: { $regex: productName, $options: 'i' } });
            return productDB;
        } else {
            throw new Error('Tên sản phẩm không được để trống');
        }
    } catch (error) {
        console.log('Tìm kiếm sản phẩm lỗi: ', error);
        throw new Error('Tìm kiếm sản phẩm lỗi');
    }
}

// Tìm sản phẩm theo id
const findProductID = async (id) => {
    try {
        // Kiểm tra sản phẩm có tồn tại không
        const productDB = await ModelProduct.findById(id);
        if (!productDB) {
            throw new Error('Sản phẩm không tồn tại');
        }

        return productDB;
    
    } catch (error) {
        console.log('Cập nhật sản phẩm lỗi: ', error);
        throw new Error('Cập nhật phẩm lỗi');
    }
}

// Xóa sản phẩm
const remove = async (id) => {
    try {
        // Kiểm tra sản phẩm có tồn tại không
        // select * from products where_id = id
        const productDB = await ModelProduct.findById(id);
        if (!productDB) {
            throw new Error('Sản phẩm không tồn tại');
        }

        let result = await ModelProduct.findByIdAndDelete(id);
        return result;
    } catch (error) {
        console.log('Xóa sản phẩm lỗi: ', error);
        throw new Error('Xóa phẩm lỗi');
    }
}




// Thêm dữ kiêu tàm thời để test
const insertData = async () => {
    // lấy danh mục
    const categories = await ModelCategory.find();
    for (let index = 0; index < 20; index++) {
        // lấy ngẫu nhiên 1 danh mục
        const category = categories[Math.floor(Math.random() * categories.length)];
        const product = new ModelProduct({
            name: `Product ${index}`,
            price: 1000 * index,
            quantity: 100 * index,
            images: ['https://i.pinimg.com/564x/57/be/03/57be03f84a356b09d7bed1d8b1565483.jpg'],
            description: `Description ${index}`,
            category: {
                category_id: category._id,
                category_name: category.name
            }
        });
        await product.save();
    }
}

module.exports = { getAll, insertData, insertDB, updateDB, remove, findProduct, findProductID };
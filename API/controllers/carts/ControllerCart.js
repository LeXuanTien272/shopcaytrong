const ModelCart = require('./ModelCart');
const UserModal = require('../user/userModel');
const ModelProduct = require('../product/ModelProduct');



const addCart = async (user, products) => {
    try {
        // user: user id của người mua
        // product: mảng id của sản phẩm và số lượng mua
        const userInDB = await UserModal.findById( user );
        if (!userInDB) {
            throw new Error('Người dùng không tồn tại');
        }
        // kiểm tra products có phải là mảng hay không
        if (!Array.isArray(products)) {
            throw new Error('Sản phẩm phải là mảng');
        }
        let productsInCart = [];
        let total = 0;
        for (let index = 0; index < products.length; index++) {
            const item = products[index];
            const product = await ModelProduct.findById(item._id);
            if (!product) {
                throw new Error('Sản phẩm không tồn tại');
            }
            if (item.quantity > product.quantity) {
                throw new Error('Sản phẩm hết hàng');
            }
            const productItem = {
                _id: product._id,
                name: product.name,
                price: product.price,
                quantity: item.quantity,
            };
            productsInCart.push(productItem);
            total += product.price * item.quantity;
        }

        // Tạo giỏ hàng mới
        const cart = new ModelCart({
            user: { _id: userInDB._id, name: userInDB.name},
            products: productsInCart,
            total,
        });

        const result = await cart.save();
        setTimeout(async () => {
            for (let index = 0; index < products.length; index++) {
                const item = products[index];
                const product = await ModelProduct.findById(item._id);
                product.quantity -= item.quantity;
                await product.save();
            }
        }, 0);
        
        return result;

    } catch (error) {
        console.log(error);
        throw new Error('Thêm vào giỏ hàng thất bại');
    }
}


// Lấy toàn bộ đơn hàng của hệ thống, có sắp xếp theo ngày giờ
// Lấy toàn bộ đơn hàng theo trạng thái, có sắp xếp theo ngày giờ mua
// Lấy toàn bộ đơn hàng của 1 người dùng, có sắp xếp theo ngày giờ mua
const getCarts = async (status, user) => {
    try {
        let query = {};
        if (status) {
            query.status = status;
        }
        if (user) {
            query.user = user;
        }
        const carts = await ModelCart
            .find(query)
            .sort({ date: -1 });

        return carts;

    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}









module.exports = { addCart, getCarts, };
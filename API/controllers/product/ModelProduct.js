const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductShema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    images: {
        type: Array,
        require: true,
        default: []
    },
    // { category_id: '', category_name: ''}
    category: {
        type: Object,
        require: true
    },
    description: {
        type: String,
        require: true,
        default: ''
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.models.product || mongoose.model('product', ProductShema);
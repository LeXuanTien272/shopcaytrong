var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const CartSchema = new Schema({
    user: {
        type: Object, 
        required: true
    },
    products: {
        type: Array,
        default: []
    },
    total: {
        type: Number, 
        default: 0
    },
    status: {
        type: Number, 
        default: 1
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.cart || mongoose.model("cart", CartSchema);
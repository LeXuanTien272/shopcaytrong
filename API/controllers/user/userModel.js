const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true
    },
    role:{
        type: String,
        default: 1, //1: Member, 2: Admin
    },
    active:{
        type: Boolean,
        default: true, //false: tài khoản không hoạt động 
    },
    carts:{
        type: Array, default: []
    },
    createAt:{
        type: Date,
        default: Date.now()
    },
    updateAt:{
        type: Date,
        default: Date.now()
    }


})

// tên colection: tiếng anh, viết thường và số ít
module.exports = mongoose.model.user || mongoose.model('user', userSchema);
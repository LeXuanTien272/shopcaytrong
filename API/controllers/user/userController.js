const { now } = require('mongoose');
const userModel = require('../user/userModel');
const bcrypt = require('bcryptjs');
const { sendMail } = require('../../util/mailer');


// Register:
// 1: Nhận dữ liệu (username, password, email) từ user.js
// 2: kiểm tra dữ liệu đầu vào (validate)
// 3: Nếu ok thì sẽ tạo account --> trả acc cho user.js
// 4: Nếu không ok thì trả lỗi


const register = async (email, password, username) => {
    // validate
    try {
        let user = await userModel.findOne({ email });
        if (user) {
            throw new Error('Email đã tồn tại');
        }
        // Thêm những yêu cầu kiểm tra khác
        // ok --> tạo user
        //ma hoa
        const saltSounds = 10;
        const salt = bcrypt.genSaltSync(saltSounds); 
        password = bcrypt.hashSync(password, salt); 
        console.log(password)

        user = new userModel({ email, password, username });

        //gui mail
        const emailData ={
         email:email,
         subject:'WELLCOME',
         content:'',
        }
        await sendMail(emailData);

        //luu
        let result = await user.save(); // hàm này để nó lưu trên db
        return result;

    } catch (error) {
        console.log('Register error: ', error.message);
        throw new Error;
    }
    return false;
}

const login = async (email, password) => {
    try {
        let userInDB = await userModel.findOne({email });
        if (!userInDB) {
            throw new Error('Email không tồn tại');
        }
       
        
    
        // const refeshSecret = jwt.Json(
        //     {
        //         _id: userInDB._id,
        //         email : userInDB.email,
        //         password: userInDB.password,
        //         role : userInDB.role,
        //         createAt : userInDB.createAt,
        //         updateAt : userInDB.updateAt,
        //     },//playload
        //     'refeshSecret',
        //     {expiresIn: 1*30*24*60*60} //tgian song cua token
        // );
        const result= bcrypt.compareSync(password,userInDB.password)
        if(result){
            return{
                _id: userInDB._id,
                email : userInDB.email,
                password: userInDB.password,
                role : userInDB.role,
                createAt : userInDB.createAt,
                updateAt : userInDB.updateAt,
                // token:token,
                // refeshSecret:refeshSecret,
            }
           // return user;
        }else{
             throw new Error('Không đúng mật khẩu !');
        }
     

    } catch (error) {

        // throw new Error('Error when login user');
        console.log('Error: ', error.message);
    }
    return null;
}

/**UPDATE 
 * - Nhân dữ liệu: email, newUsername ,newPassword,
*/


const updateuser = async (id, username, password, role) => {

    try {
        let userid = await userModel.findById(id);
        if (!userid) {
            throw new Error('Id không hợp lệ!');
        }
        // Edit data

        userid.username = username || userid.username
        userid.password = password || userid.password
        userid.role = role || userid.role
        userid.updateAt = Date.now();
        await userid.save();

        const user = new userModel(
            {
                _id: userid._id,
                username: userid.username,
                email: userid.email,
                password: userid.password,
                role: userid.role
            }
        )
        return user;



    } catch (error) {
        console.log('Error: ', error);
        throw new Error('Error when update user')
    }
    return null;
}

const deleteuser = async (id) => {

    try {
        let user = await userModel.findById({ id });
        if (!user) {
            throw new Error('Id khong hop le !')
        }
        // Edit data

        const result = await userModel.deleteOne({ _id: id });
        return result;

    }
    catch (error) {
        console.log('Error: ', error);
        throw new Error('Error when delete user')
    }
    return null;
}




module.exports = { register, login, updateuser, deleteuser }
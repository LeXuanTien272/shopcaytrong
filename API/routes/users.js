var express = require('express');
var router = express.Router();
const userController = require('../controllers/user/userController');

//http://localhost:6666//users

// Register
// method : POST
// url: //http://localhost:6666/users/register
// response: nếu thành công trả về đúng user mới tạo, 
//           nếu thất bại trả về error


//router: điều hướng tín hiệu dùng để gửi và nhận phản hồi của db
router.post('/register', async (req, res, next) => {

  //1: Đọc dữ liệu từ client gửi về, req.body
  const { email, password, username } = req.body;
  try {
    //2: Xử lý yêu cầu (không viết ở đây)
    let result = await userController.register(email, password, username);

    //3: Gửi phản hồi về client:  
    // if (result) {
    //   
    // } else {
    //   throw new Error('Đăng nhập thất bại');
    // }
    return res.status(200).json({ status: true, data: result });
  } catch (error) {
    return res.status(500).json({ status: false, data: error.message });
  }

})


// Login
// method : POST
// url: http://localhost:6666/users/login
// response: trả về người dùng// null

router.post('/login', async (req, res, next) => {
  //1: Đọc dữ liệu từ client gửi về, req.body
  const { email, password} = req.body;
  try {
    //2: Xử lý yêu cầu (không viết ở đây)
    let result = await userController.login(email, password);

    //3: Gửi phản hồi về client:  
    return res.status(200).json({ status: true, data: result });
  } catch (error) {
    return res.status(500).json({ status: false, data: error.message });
  }


})

// Update
// method : put
// url: http://localhost:6666/users/update_profile
// response: trả về người dùng// null

router.put('/update_profile/:id', async (req, res, next) => {
  const {id}= req.params
  const { username, password,role} = req.body;
  try {
    let result = await userController.updateuser(id,username, password,role);
    return res.status(200).json({ status: true, data: result });
  } catch (error) {
    return res.status(500).json({ status: false, data: error.message });
  }
});


// Update
// method : delete
// url: http://localhost:6666/users/delete
// response: xóa
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const {id}= req.params
   const result= await userController.deleteuser(id);
   if(result){
    return res.status(200).json({ status: true, message:'Thành công !' });
   }else{
    return res.status(500).json({ status: false, message:'Thất bại !' });
   }
    
  } catch (error) {
    return res.status(500).json({ status: false, data: error.message });
  }
});


module.exports = router;

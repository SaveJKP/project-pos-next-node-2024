const express = require("express");
const app = express();
const bodyPaser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

// ใช้ body-parser เพื่อแปลงข้อมูลในคำขอเป็น JSON
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true })); // รองรับการส่งข้อมูลในรูปแบบ URL-encoded
app.use(cors()); // เปิดใช้งาน CORS เพื่ออนุญาตให้เข้าถึง API จากโดเมนอื่น
app.use(fileUpload()); // เปิดใช้งานการอัปโหลดไฟล์
app.use("/uploads", express.static("uploads")); // ตั้งค่า static files สำหรับไฟล์ที่อัปโหลด

// นำเข้าตัวควบคุม (controllers) ต่างๆ
const userController = require("./controllers/user-controller");

app.post("/api/user/signin", (req, res) => userController.signIn(req, res));

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

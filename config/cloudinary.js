const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});
 let storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'guaurdame', // The name of the folder in cloudinary
  allowedFormats: ['jpg','jpeg','pdf', 'png','gif'],
  filename: function (req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

const parser = multer({ storage: storage });

module.exports = parser;

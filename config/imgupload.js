const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

require("dotenv").config();

//Configure cloudinary
const config = cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

//define storage
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: process.env.CLOUDINARY_RESOURCE_FOLDER,
  allowedFormat: ["jpg", "jpeg", "png"],
  transformation: [{ width: 300, height: 300, crop: "limit" }]
});

//multer upload cloudinary
const upload = multer({ storage: storage });

module.exports = {
  storage: storage,
  upload: upload,
  config: config
};

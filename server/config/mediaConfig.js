const path = require("path");
const multer = require("multer");

// set up file-storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
})

// maxsize of file [2 mb & 3 mb]
const imageMaxSize = 2 * 1024 * 1024;
const pdfMaxSize = 3 * 1024 * 1024;

// image upoad
const ImageUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
        }
    },
    limits: {
        fileSize: imageMaxSize
    }
});

// pdf upload
const FileUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "file/pdf") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error("Only .pdf format allowed!"));
        }
    },
    limits: {
        fileSize: pdfMaxSize
    }
});

module.exports = { ImageUpload, FileUpload }
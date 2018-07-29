var express = require('express');
var router = express.Router();

//multer object creation
var multer = require('multer')
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});

var upload = multer({ storage: storage });

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Baptême de Julia' });
});

router.post('/', upload.array('imageupload'), function(req, res) {
    res.redirect('/?successMsg=Les fichiers ont bien été reçus.');
});

module.exports = router;

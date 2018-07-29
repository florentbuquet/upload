var express = require('express');
var router = express.Router();

//multer object creation
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname + Date.now())
    }
});

var upload = multer({ storage: storage });

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Baptême de Julia',
        texte: ' Hello, voici une petite plateforme créée par nos soins afin que vous puissiez partager les photos' +
            ' prises lors du baptême de notre petite fille afin de compléter son album photo et bien sûr de lui montrer' +
            ' quand elle sera un peu plus grande :D.',
        successMsg: req.query.successMsg
    });
});

router.post('/', upload.array('imageupload'), function(req, res) {
    res.redirect('/?successMsg=Les fichiers ont bien été reçus.');
});

module.exports = router;

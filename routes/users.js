var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var usuarios = [
    {
      id: 1, nome: 'Rogerio Alencar', idade: 30
    },
    {
      id: 2, nome: 'Maria Alencer', idade: 23
    },
    {
      id: 3, nome: 'Israel', idade: 60
    }
  ];
  res.render('users', { usuarios: usuarios });
});



module.exports = router;

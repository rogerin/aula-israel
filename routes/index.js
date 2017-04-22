var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aula Israel', idade: 30 });
});

router.get('/teste/:id', function(req, res){
    var id = req.params.id;
    res.render('teste', { id: id });
})


router.post('/teste', function(req, res){
    var id = req.body.id;
    res
      .status(200)
      .json(
        {
          status: 200,
          id: id
        });
})



module.exports = router;

var express = require('express');
var router = express.Router();

const messages = [
  {
    resolution: "Hi there!",
    user: "Amando",
    added: new Date().toString().slice(4,21)
  },
  {
    resolution: "Hello World!",
    user: "Charles",
    added: new Date().toString().slice(4,21)
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messageboard', messages: messages });
});

router.get('/new', function(req, res) {
  res.render('form', { title: 'form'});
});

router.post('/new', function(req, res) {
  let date = new Date().toString().slice(4,21)
  const entry = {
    resolution: req.body.resolution, 
    user: req.body.user, 
    added: date
  }
  
  messages.push(entry);
  res.redirect('/');
});


module.exports = router;

var express = require('express');
var router = express.Router();

const messages = [
  {
    resolution: "No beer on Tuesdays",
    user: "Amanda",
    added: "Jan 01 2022 9:32"
  },
  {
    resolution: "Read a book",
    user: "Charles",
    added: "Jan 01 2022 14:55"
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

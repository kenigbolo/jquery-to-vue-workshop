const express = require('express');
const router = express.Router();

// define the home page route
router.get('/', function(req, res) {
  res.render('pages/index', {
    scripts: ['index'],
    styles: ['home'],
    title: 'Home',
  });
});
// define the gallery route
router.get('/gallery', function(req, res) {
  res.render('pages/gallery', {
    scripts: ['gallery'],
    styles: ['gallery'],
    title: 'Gallery',
  });
});
// define the upload route
router.get('/upload', function(req, res) {
  res.render('pages/upload', {
    scripts: ['upload'],
    styles: ['upload'],
    title: 'Upload',
  });
});

router.post('/signup', function(req, res) {
  const {username, password} = req.body;
  req.session[username] = password;
  res.status(200).json({success: 'Signup successful'});
});

router.post('/login', function(req, res) {
  const {username, password} = req.body;
  req.session[username] == password
    ? res.status(200).json({success: 'Logged in', redirect: '/gallery'})
    : res.status(200).json({error: 'Invalid username/password'});
});

module.exports = router;

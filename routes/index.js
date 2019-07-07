const express = require('express');
const router = express.Router();

// define the home page route
router.get('/', function(req, res) {
  res.render('pages/index', {
    scripts: ['index.js'],
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

module.exports = router;

const express = require('express');
//const yangController = require('../controllers/yang-controller');
const yangRouter = express.Router();

yangRouter.get('/', (req, res) => {
  res.render('style');
});
yangRouter.get('/one', (req, res) => {
  res.render('one');
});
yangRouter.get('/two', (req, res) => {
  res.render('two');
});
yangRouter.get('/three', (req, res) => {
  res.render('three');
});
yangRouter.get('/about', (req, res) => {
  res.render('about');
});

module.exports = yangRouter;

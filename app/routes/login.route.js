module.exports = (app) => {
  const login = require("../controllers/login.controller");
  const router = require('express').Router();
  const { authJwt } = require('../Middleware')

  router.post("/genkey", login.genkey);
  router.get('/', [authJwt.verifyToken], login.findAll);
  router.post('/', login.login);

  app.use('/', router);
};


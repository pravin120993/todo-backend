const express = require('express');

class UserRoute extends express.Router {
  constructor() {
    super();
    this.post('/register', (req, res, next) => {
      console.log('inside validation');
      let validation = true;
      if(validation){
        next();
      } else {
        throw new Error('validation error');
      }
    }, (req, res, next) => {
      console.log('inside data storing function');
      let saved = true;
      if(saved){
        res.send('data inserted')
      } else {
        throw new Error('some error occured');
      }
    })
    this.get('/login', (req, res) => {
      res.send('this is login page');
    })
  }
}

module.exports = UserRoute;
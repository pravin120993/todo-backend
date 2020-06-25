const express = require('express');
const UserRoute = require('./user');
const TodoRoute = require('./todo');


class Routes extends express.Router {
  
  constructor() {
    super();
    this.use('/user', new UserRoute());
    this.use('/todo', new TodoRoute());
  }
}

module.exports = Routes;
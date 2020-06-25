const express = require('express');

class UserRoute extends express.Router {
  constructor() {
    super();
    this.get('/', (req, res) => {
      res.send('this is todo module');
    })
  }
}

module.exports = UserRoute;
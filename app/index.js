const express = require('express');
const config = require('config');
// const bodyParser = require('body-parser');
// const cors = require('cors');

const Routes = require('./routes/v1')

const app = express();

app.use('/v1', new Routes());
// app.get('/', (req, res) => res.json({name: "pravin kumar s"}));

app.listen(config.get('port'), () => console.log(`Example app listening at http://localhost:${config.get('port')}`))
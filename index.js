const express = require('express');
const app = express();
const router = require('./middleware/router');

app.use('/', router);


app.listen(process.env.port || 5000);
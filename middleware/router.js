const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();

router.get('/', (req, res) => {
    res.sendFile(path.normalize(__dirname+ '/../public/index.html' ));
})



module.exports = router
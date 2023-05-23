const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    const htmlPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(htmlPath);
});

module.exports = router;
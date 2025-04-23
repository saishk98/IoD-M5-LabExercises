const express = require('express');
const router = express.Router();

router.get('/random', (req, res) => {
    const min = parseFloat(req.query.min) || 0;
    const max = parseFloat(req.query.max);
    if (isNaN(max) || max <= min) {
        return res.status(400).json({ error: "Invalid min/max values" });
    }
    const randomNum = Math.random() * (max - min) + min;
    res.json({ result: randomNum.toFixed(2) });
});

module.exports = router;

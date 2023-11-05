const express = require('express');
const router = express.Router();
const authenticate = require('./authMiddleware');


router.get('/protected-route', authenticate, (req, res) => {
    res.json({ message: 'You have access to this route' });
});

module.exports = router;

  
const path = require('path');

const expresss = require('express');

const rootDir = require('../util/path');

const router = expresss.Router();

router.get('/', (req, res, next) => {
	res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
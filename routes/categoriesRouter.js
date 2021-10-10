const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({
		categorie: faker.commerce.productAdjective(),
	});
});

router.get('/:id', (req, res) => {
	const { id } = req.query;
	res.json({
		id,
		categorie: faker.commerce.productAdjective(),
	});
});

router.get('/:categorieId/products/:productId', (req, res) => {
	const { categorieId, productId } = req.query;
	res.json({
		categorieId,
		productId,
	});
});

module.exports = router;

const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
	const { limit, offset } = req.query;
	if(limit && offset) {
		res.json({
			limit,
			offset
		})
	} else {
		res.send('No existen los parametros.')
	};
});

router.get('/:id', (req, res) => {
	const { userId } = req.query;
	res.json({
		userId,
		firstname: faker.name.firstName(),
		lastname: faker.name.lastName(),
		gender: faker.name.gender(),
		job: faker.name.jobTitle(),
	})
})

module.exports = router;

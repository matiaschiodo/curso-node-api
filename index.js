const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.com.ar'];
const options = {
	origin: (origin, callback) => {
		if(whitelist.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Acceso denegado'));
		}
	}
};
app.use(cors(options));

app.get('/', (req, res) => {
	res.send('Hola server en express!')
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
	console.log('Port: ' + port);
});

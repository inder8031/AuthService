const express = require('express');
const { PORT } = require('./config/serverConfig');

const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
router.use('/api', apiRoutes);

const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server started at port: ${PORT}`);
    });
}

startServer();
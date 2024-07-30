const express = require('express');
const { PORT } = require('./config/serverConfig');
// const bcrypt = require('bcrypt');
// const { User } = require('./models/index');

const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

const startServer = async () => {
    // const hash = await User.findByPk(2);
    // const response = bcrypt.compareSync("48579lkfjdbs4", hash.password);
    // console.log(response);

    app.listen(PORT, () => {
        console.log(`Server started at port: ${PORT}`);
    });
}

startServer();
const express = require('express');
const { PORT } = require('./config/serverConfig');
const db = require('./models/index');
const { DB_SYNC } = require('./config/serverConfig');
const { User, Role } = require('./models/index');

const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

const startServer = async () => {
    if(DB_SYNC) {
        try {
            await db.sequelize.sync({alter: true});
            console.log("DB syncronised");
        } catch (error) {
            console.log("DB Sync error");
            throw { error };
        }
    }

    const user = await User.findByPk(1);
    const role = await Role.findByPk(2);
    // const response = await user.addRole(role);
    const response1 = await role.createUser({
        email: 'kjghui@gmail.com',
        password: '124589'
    });
    console.log(response1);

    app.listen(PORT, () => {
        console.log(`Server started at port: ${PORT}`);
    });
}

startServer();
const { User } = require('../models/index');

class UserRepository {
    
    async create(data) {
        try {
            const user = await User.create(data);
            const response = await user.toJSON();
            delete response.password;
            return response;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw { error };
        }
    }

    async getById(userId) {
        try {
            const user = await User.findByPk(userId, {
                attributes: ['id', 'email']
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw { error };
        }
    }

    async getByEmail(email) {
        try {
            const user = await User.findOne({
                where: {
                    email: email 
                }
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw { error };
        }
    }

    async getAll() {
        try {
            const users = await User.findAll({
                attributes: {
                    exclude: ['password']
                }
            });
            return users;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw { error };
        }
    }

    async update(userId, data) {
        try {
            await User.update(data, {
                where: {
                    id: userId
                },
                individualHooks: true,
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw { error };
        }
    }

    async destroy(userId) {
        try {
            await User.destroy({
                where: {
                    id: userId 
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw { error };
        }
    }
}

module.exports = UserRepository;
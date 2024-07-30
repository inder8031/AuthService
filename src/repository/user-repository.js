const { User } = require('../models/index');

class UserRepository {
    
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw { error };
        }
    }

    async get(userId) {
        try {
            const user = await User.findByPk(userId);
            return user;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw { error };
        }
    }

    async getAll() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw { error };
        }
    }

    async update(userId, data) {
        try {
            const user = await User.update(data, {
                where: {
                    id: userId
                }
            });
            return user;
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
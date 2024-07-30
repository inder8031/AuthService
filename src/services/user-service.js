const UserRepository = require('../repository/user-repository');

class UserService {
    construcor () {
        this.userRepository = new UserRepository();
    } 

    async createUser(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in user service layer");
            throw { error };
        }
    }

    async getUser(userId) {
        try {
            const user = await this.userRepository.get(userId);
            return user;
        } catch (error) {
            console.log("Something went wrong in user service layer");
            throw { error };
        }
    }

    async getAllUsers() {
        try {
            const users = await this.userRepository.getAll();
            return users;
        } catch (error) {
            console.log("Something went wrong in user service layer");
            throw { error };
        }
    }

    async updateUser(userId, data) {
        try {
            const user = await this.userRepository.update(userId, data);
            return user;
        } catch (error) {
            console.log("Something went wrong in user service layer");
            throw { error };
        }
    }

    async deleteUser(userId) {
        try {
            const user = await this.userRepository.destroy(userId);
            return user;
        } catch (error) {
            console.log("Something went wrong in user service layer");
            throw { error };
        }
    }
}

module.exports = UserService;
const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { JWT_KEY } = require('../config/serverConfig');

class UserService {
    constructor () {
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
            const user = await this.userRepository.getById(userId);
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

    createToken(user) {
        try {
            const token = jwt.sign(user, JWT_KEY, {
                expiresIn: 300
            });
            return token;
        } catch (error) {
            console.log("Token not created");
            throw { error };
        }
    }

    verifyToken(token) {
        try {
            const decoded = jwt.verify(token, JWT_KEY);
            return decoded;
        } catch (error) {
            console.log("Invalid token");
            throw { error };
        }
    }

    checkPassword(plainPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(plainPassword, encryptedPassword);
        } catch (error) {
            console.log("Invalid Password");
            throw { error };
        }
    }

    async signIn(email, plainPassword) {
        try {
            const user = await this.userRepository.getByEmail(email);
            if(!this.checkPassword(plainPassword, user.password)) {
                console.log("Invalid Password");
                throw { error: "Invalid Password"};
            }
            const token = this.createToken({
                email: user.email,
                id: user.id
            });
            return token;
        } catch (error) {
            console.log("Something went wrong in the signin process");
            throw { error };
        }
    }

    async isAuthenticated(token) {
        try {
            const user = this.verifyToken(token);
            if(!user) {
                throw { error: "Invalid token"};
            }
            const userExists = await this.userRepository.getById(user.id);
            if(!userExists) {
                throw { error: "No user corresponding to following token exists"};
            }
            return userExists.id;
        } catch (error) {
            console.log("Something went wrong in authentication process in user service layer");
            throw { error };
        }
    }

    async isAdmin(id) {
        try {
            const response = await this.userRepository.isAdmin(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in user service layer");
            throw { error };
        }
    }
}

module.exports = UserService;
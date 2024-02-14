import {UserRepository} from '../repository/index.js'

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async signup(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUserbyEmail(email){
        try {
            const user = await this.userRepository.findBy({email});
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signin(data){
        try {
            const user = await this.getUserbyEmail(data.email);
            if(!user){
                throw{
                    message: 'No user found',
                };
            }
            if(!user.comparePassword(data.password)){
                throw{
                    message: 'incorrect password',
                };
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;
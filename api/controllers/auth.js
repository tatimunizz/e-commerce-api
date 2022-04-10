import User from '../models/User.js';

const register = async (body) => {

    const newUser = new User(body);

    return newUser.save()
        .catch(e => { throw new Error(e) });
}

export default {
    register
}
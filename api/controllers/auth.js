import User from '../models/User.js';
import CryptoJS from 'crypto-js';

const register = async (body) => {

    body.password = CryptoJS.AES.encrypt(body.password, process.env.PASS_SECRET).toString();

    const newUser = new User(body);

    return newUser.save()
        .catch(e => { throw new Error(e) });
}

const login = async (body) => {
    const user = await User.findOne({ username: body.username });
    if (!user) throw new Error('Wrong credentials!');

    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET);
    const dbPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    if (dbPassword !== body.password) throw new Error('Wrong credentials!');

    const {password, ...others} = user._doc;
    return others;
}

export default {
    register,
    login
}
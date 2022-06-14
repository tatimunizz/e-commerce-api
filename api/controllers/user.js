import User from "../models/User.js";
import CryptoJS from 'crypto-js';

const update = async (body, params) => {
    if(body.password) {
        body.password = CryptoJS.AES.encrypt(body.password, process.env.PASS_SECRET).toString();
    }

    const updatedUser = await User.findByIdAndUpdate(params.id, {
        $set: body
    }, {new: true}).catch(e => { throw new Error(e) });

    return updatedUser;
}

export default {
    update
}
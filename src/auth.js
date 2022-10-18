const jwt = require('jsonwebtoken')

const {Model: { User }} = require('../db')




User.authenticate = async function ({username, password}){
    const user = await User.findOne({
        where: {username, password}
    });
    return jwt.sign({id: user.id})
}


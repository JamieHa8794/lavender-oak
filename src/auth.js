const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {Model: { User }} = require('../db')


User.addHook('beforeSave', async function(user){
    if(user._changed.has('password')){
        user.password = await bcrypt.hash(user.password, 10)
    }
})

User.authenticate = async function ({username, password}){
    const user = await User.findOne({
        where: {username}
    });
    if(user && await bcrypt.compare(password, user.password)){
        return jwt.sign({id: user.id}, process.env.JWT);
    }
}

User.byToken = async function (token){
    try{
        const {id} = await jwt.verify(token, process.env.JWT);
        const user = await User.findByPk(id);
        if(user){
            return user;
        }
        const error = Error('The username and password does not match');
        error.status = 401;
        throw error;
    }
    catch(err){
        const error = Error('The username and password does not match');
        error.status = 401;
        throw error
    }
}



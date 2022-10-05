const Sequelize = require('sequelize');
const {STRING} = Sequelize
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/lavander_oak');

const User = db.define('user', {
    name: {
        type: STRING
    }
})

const Furniture = db.define('furniture', {
    name: {
        type: STRING
    }
})

const syncAndSeed = async () =>{
    try{
        await db.sync({force: true})
        const [ross, rachel, monica, chandler, pheobe, joey] = await Promise.all(['Ross', 'Rachel', 'Monica', 'Chandler', 'Pheobe', 'Joey'].map(name => User.create({name})))
        const [chair, sofa, bed, lamp, rug] = await Promise.all(['chair', 'sofa', 'bed', 'lamp', 'rug'].map(name => Furniture.create({name})))
        console.log('connected to db')
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    db,
    syncAndSeed,
    model: {
        Furniture,
        User
    }
}


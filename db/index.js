const Sequelize = require('sequelize');
const {STRING, TEXT, INTEGER, UUID, UUIDV4} = Sequelize
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/lavander_oak');

const { products, users } = require('./data')

const User = db.define('user', {
    id:{
        type: UUID,
        primaryKey: true, 
        defaultValue: UUIDV4, 
    },
    userName: {
        type: STRING
    },
    firstName: {
        type: STRING
    },
    middleName: {
        type: STRING
    },
    lastName: {
        type: STRING
    },
    phoneNumber: {
        type: STRING
    },
    streetAddress: {
        type: STRING
    },
    city: {
        type: STRING
    },
    zipCode: {
        type: STRING
    },
})

const Product = db.define('product', {
    id:{
        type: UUID,
        primaryKey: true, 
        defaultValue: UUIDV4,
    },
    img:{
        type: STRING
    },
    name: {
        type: STRING
    },
    category: {
        type: STRING
    },
    price: {
        type: STRING
    },
    color:{
        type: STRING
    },
    sellable_online: {
        type: STRING
    },
    short_description: {
        type: TEXT
    },
    designer: {
        type: STRING
    },
    height: {
        type: STRING
    },
    width: {
        type: STRING
    },
    depth: {
        type: STRING
    },
})

const Cart = db.define('cart', {
    id:{
        type: UUID,
        primaryKey: true, 
        defaultValue: UUIDV4,
    },
    userId:{
        type: STRING,
    },
    count: {
        type: INTEGER
    }
})

// User.hasMany(Cart);
Product.hasMany(Cart);



const syncAndSeed = async () =>{
    try{
        await db.sync({force: true})


       await Promise.all(users.map(user=>{
            User.create({
                userName: user.userName,
                firstName: user.firstName,
                middleName: user.middleName,
                lastName: user.lastName,
                phoneNumber: user.phoneNumber,
                streetAddress: user.streetAddress,
                city: user.city,
                zipCode: user.zipCode,
            })
       })) 
        
        await Promise.all(products.map(product =>{
            Product.create({
                name: product.name,
                img: product.img,
                category: product.category,
                price: product.price,
                color: product.color,
                sellable_online: product.sellable_online,
                short_description: product.short_description,
                designer: product.designer,
                height: product.height,
                width: product.width,
                depth: product.depth,
            })
        }))
        
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
        Product,
        User,
        Cart
    }
}


const {syncAndSeed, model: {Product, User, Cart}} = require('./db')

const express = require('express');
const app = express();
const path = require('path');


app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')))




//users
app.get('/api/users', async (req, res, next)=>{
    try{
        const users = await User.findAll();
        res.send(users)
    }
    catch(err){
        next(err)
    }
})


app.put('/api/users/:id', async (req, res, next)=>{
    try{
        const userId = req.params.id
        const user = await User.findByPk(userId);
        res.send(await user.update({
            firstName: req.body.firstName,
            middleName: req.body.middleName, 
            lastName: req.body.lastName, 
            phoneNumber: req.body.phoneNumber, 
            streetAddress: req.body.streetAddress, 
            city: req.body.city, 
            zipCode: req.body.zipCode
        }))
        console.log(user)
    }
    catch(err){
        next(err)
    }
})


//products
app.get('/api/products', async (req, res, next)=>{
    try{
        const product = await Product.findAll();
        res.send(product)
    }
    catch(err){
        next(err)
    }
})


app.get('/api/carts/:userId', async (req, res, next)=>{
    try{
        const _userId = req.params.userId
        const cart = await Cart.findAll({
            where: {
                userId: _userId
            }
        });
        res.send(cart)
    }
    catch(err){
        next(err)
    }
})



app.post('/api/carts', async (req, res, next) =>{
    try{
        res.status(201).send(await Cart.create({
            userId: req.body.userId,
            productId: req.body.productId,
            count: 1
        }))
    }
    catch(err){
        next(err)
    }
})

app.put('/api/carts/:id', async (req, res, next) =>{
    try{
        const cartItem = await Cart.findByPk(req.params.id)
        res.send(await cartItem.update({
            count: req.body.count
        }))
        console.log(cartItem)
    }
    catch(err){
        next(err)
    }
})

app.delete('/api/carts/:id', async (req, res, next)=>{
    try{
        const cartItem = await Cart.findByPk(req.params.id)
        await cartItem.destroy();
        res.sendStatus(204);
    }
    catch(err){
        next(err)
    }
})


//auth
app.get('/api/auth', async (req, res, next)=>{
    try{
        res.send(await User.byToken(req.headers.authorization))
    }
    catch(err){
        next(err)
    }
})



app.post('/api/auth', async (req, res, next)=>{
    try{
        res.send({ token: await User.authenticate(req.body)})
    }
    catch(err){
        next(err)
    }
})



const init = async () =>{
    try{
        await syncAndSeed();
        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}`))
    }
    catch(err){
        console.log(err)
    }
}

init();
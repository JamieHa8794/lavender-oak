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


//cart
app.get('/api/carts', async (req, res, next)=>{
    try{
        const cart = await Cart.findAll();
        res.send(cart)
    }
    catch(err){
        next(err)
    }
})

app.post('/api/carts', async (req, res, next) =>{
    try{
        console.log(req.body)
        res.status(201).send(await Cart.create({
            userId: req.body.userId,
            productId: req.body.productId
        }))
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
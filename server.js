const {syncAndSeed, model: {Furniture, User}} = require('./db')

const express = require('express');
const app = express();
const path = require('path')



app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/public', express.static(path.join(__dirname, 'public')))

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



//furniture
app.get('/api/furniture', async (req, res, next)=>{
    try{
        const furniture = await Furniture.findAll();
        res.send(furniture)
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
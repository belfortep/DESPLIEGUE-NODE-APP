const express = require('express');
const dotenv = require('dotenv');
const app = express();

const {connectDB} = require('./db');

dotenv.config()
connectDB();
app.get('/api/users', (req,res)=>{
    return res.status(200).json([{name:'somebody'}, {name: 'someone'}])
})

app.use(express.static('public'));

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log('Server on port', port);
})
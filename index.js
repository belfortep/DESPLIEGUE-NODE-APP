const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    return res.send("Hello");
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log('Server on port', port);
})
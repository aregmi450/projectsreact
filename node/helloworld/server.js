
//express js uses response.send and normal one uses response.end

const express=require('express')
const bodyParser = require('body-parser')
const app=express()


app.use(bodyParser.json())

app.get('/', (req, res)=> {

    res.send('This is homepage ')
});
app.get('/services', (req, res)=>{
    res.send('This is services page');
});

app.get('/players', (req, res)=>{
    const players=['Ronaldo', 'Sachin', 'Rooney']

    res.send(players);
});

//recieveing we will use post method 
app.post('/login', (req, res)=>{

    var username=req.body.username
    var password=req.body.password

    if(username=='javascript' && password=='udemy')
    {
        res.send('Login Succesful');
    }
    else{
        res.send('Login Failed');
    }
});

app.listen(5000, ()=>{
    console.log('server started on port');
});
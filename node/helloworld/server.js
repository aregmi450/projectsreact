
//express js uses response.send and normal one uses response.end

const express=require('express')

const app=express()

app.get('/', (req, res)=> {

    res.send('This is homepage ')
});
app.get('/services', (req, res)=>{
    res.send('This is services page');
});

app.get('/players', (req, res)=>{
    const players=['Ronaldo', 'Sachin', 'Rooney']

    res.send(players);
})

app.listen(5000, ()=>{
    console.log('server started on port');
});
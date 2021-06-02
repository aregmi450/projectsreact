// backend file 

var http = require('http')

var url = require('url')

http.createServer(function(req, res)
{
    //create route 

    var route = req.url 

    if(route==='/')
    {
        res.end('This is information from backend to homepage.')
    }

    if(route==='/getusernames')
    {
        var usernames = ['Messi', 'Ronaldo', 'Ramesh']
        res.end(JSON.stringify(usernames))
    }

    console.log('My Node JS Server started successfully in port 5000.')
}).listen(5000)
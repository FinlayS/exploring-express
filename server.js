const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //res.send('<h1>Hello Express!</h1>')

    res.send({
        name: 'Finlay',
        likes: [
            'Whiskey',
            'cheese'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page!')
});


// bad  - send back json with errorMessage
app.get('/bad', (req, res) =>{
    res.send({
        statusCode: 400,
        errorMessage: 'Bad Request'
    })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000')
});
require('./models/db');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');


const videoController = require('./controller/videoController');

var app = express();

app.set('view', path.join(__dirname, '/views/'));

app.engine('hbs', exphbs({
    extname:'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/'
}));

app.set('view engine', 'hbs');
app.listen(7070,()=>{
    console.log('Express Server started at port: 7070');
});


app.use('/user', videoController);

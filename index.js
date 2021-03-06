const express = require('express');
const morgan = require('morgan');
const app = express();
const {mongoose}= require('./controller/connection')

app.set('port', 3000);

app.use(morgan('dev'))
app.use(express.json())

app.use('/app/',require('./routes/route'));
//uncomment the following line if you want to merge with the front-end learning path
//app.use(express.static('./public/'))


app.listen(app.get('port'), () => {
    console.log('server started')
});
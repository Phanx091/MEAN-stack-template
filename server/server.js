// REQUIRES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const entryRouter = require('./routes/entry-route');

// PORT
const PORT = process.env.PORT || 5000;

// APP.USE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));
app.use('/entry', entryRouter);

// APP.LISTEN
app.listen(PORT, function(){
    console.log(`Listening on PORT : ${PORT}`);  
});
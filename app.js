const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const app = express();



//Import routes
const postsRoute = require('./routes/posts');

//Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/posts', postsRoute);


//Routes
app.get('/', (req, res)=>{
    res.send('Home page')
});



//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, ()=>{
    console.log('Connected to db');
})

//Start listening to the server
app.listen(3000);

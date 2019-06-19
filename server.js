const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 5400
require('dotenv').config()

// MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));

// CONNECT TO THE DB    
mongoose.connect('mongodb://localhost:27017/token-auth-1', 
{ useNewUrlParser: true },
() => console.log('Connected to the DB'));

// ROUTES
app.use('/auth', require('./routes/authRouter.js'));
app.use('/api', expressJwt({ secret: process.env.SECRET }));
app.use('/api/blog', require('./routes/blogRouter.js'));
app.use('/api/gallery', require('./routes/imageRouter'))
app.use('/gallery', require('./routes/imageRouter'))
app.use('/blog', require('./routes/blogRouter'))

// UNIVERSAL ERROR HANDLER
app.use((err, req, res, next) => {
    console.error(err)
    return res.status(500).send({ errMsg: err.message })
})

// SERVER LISTENING
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})



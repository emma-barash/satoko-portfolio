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

// ... other imports
const path = require("path")

// ... other app.use middleware setups
app.use(express.static(path.join(__dirname, "client", "build")));

// CONNECT TO THE DB    
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/token-auth-1', 
{ useNewUrlParser: true },
() => console.log('Connected to the DB'));

// ROUTES
app.use('/auth', require('./routes/authRouter.js'));
app.use('/api', expressJwt({ secret: process.env.SECRET }));
app.use('/api/blog', require('./routes/blogRouter.js'));
app.use('/api/gallery', require('./routes/imageRouter'))
app.use('/api/about', require('./routes/aboutRouter'))
app.use('/gallery', require('./routes/imageRouter'))
app.use('/blog', require('./routes/blogRouter'))
app.use('/about', require('./routes/aboutRouter'))

// UNIVERSAL ERROR HANDLER
app.use((err, req, res, next) => {
    console.error(err)
    return res.status(500).send({ errMsg: err.message })
})


// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// SERVER LISTENING
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})



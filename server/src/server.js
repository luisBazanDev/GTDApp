require('dotenv').config();
const express = require('express');
const app = express();
const Mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
const PassportRouter = require('./passport/passportRouter');
const ApiRouter = require('./routers/Api');
// -------- Imports --------
Mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   },
   () => {
   console.log("Mongoose Is Connected");
   }
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({
   origin: process.env.FRONTEND_URL,
   credentials: true
}));
app.use(session({
   secret: process.env.SECRET_KEY,
   resave: true,
   saveUninitialized: true,
}));
app.use(cookieParser(process.env.SECRET_KEY));
app.use(passport.initialize());
app.use(passport.session());
require('./passport/passportConfig')(passport);

// Routes
app.use('/', ApiRouter);
app.use('/auth', PassportRouter)

app.listen(process.env.PORT || 3000, () => {
   console.log('server is running in', process.env.PORT || 3000);
})
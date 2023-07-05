const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { auth } = require('./routes');
dotenv.config();
const authRoute = require('./routes').auth;
const courseRoute = require('./routes').course;
const passport = require('passport');
require('./config/passport')(passport);

// 連結 MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/mernDB')
  .then(() => {
    console.log('連結到mongodb...');
  })
  .catch((e) => {
    console.log(e);
  });

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', authRoute);
// course route 應該被 jwt 保護，如果 request header內部沒有jwt，則request就會被視為是unauthorized
app.use('/api/courses', passport.authenticate('jwt', { session: false }), courseRoute);




app.listen(3000, () => {
  console.log('後端伺服器聆聽在port 3000 ...');
});

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
const path = require('path');
const port = process.env.PORT || 3000;

// 連結 MongoDB
mongoose
  .connect(procss.env.MONGODB_CONNECTION)
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
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.use('/api/user', authRoute);
// course route 應該被 jwt 保護，如果 request header內部沒有jwt，則request就會被視為是unauthorized
app.use('/api/courses', passport.authenticate('jwt', { session: false }), courseRoute);

// 網站首頁本身就是 URL /

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  })
}

app.listen(port, () => {
  console.log('後端伺服器聆聽在port 3000 ...');
});

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const budgetModel = require('./models/budgetModel');
const router = express.Router();
const UserSchema = require('./models/userModel');
const users = require('./routes/usersroute');
const authenticate = require('./routes/authentication');

const budget = require('./routes/budgetroute');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('', express.static('public'));
app.use(express.json());

var url =
  'mongodb+srv://mounika:Naveen@28@cluster0.2wyni.mongodb.net/test?retryWrites=true&w=majority';

app.use('/users', users);
app.use('/auth', authenticate);
app.use('/budget', budget);

app.use(express.json());

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('Something went wrong', err));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});

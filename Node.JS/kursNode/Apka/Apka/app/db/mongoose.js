const mongoose = require('mongoose');
const { database } = require('../config')
const url = 'mongodb://localhost:27017/node-kurs'

mongoose.connect(database);

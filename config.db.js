const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tendencys-jdfp')
    .then(() => console.log('Succesfull DB connection'))
    .catch((err) => console.log(err));
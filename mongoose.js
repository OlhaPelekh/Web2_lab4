var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://Admin:Admin123@cluster0.jsqbz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=> console.log('mongodb connect...'))
console.log('mongodb connect...')
module.exports = mongoose
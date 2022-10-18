
const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://kdtec:bitch@cluster0.xxjrvwq.mongodb.net/Recipies?retryWrites=true&w=majority
`, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => {
    console.log('Connected')
})

require('./Category')
require('./Recipe')
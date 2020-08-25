const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit:'50mb', extended: true}))

require('./routes/addzip')(app)
require('./routes/addCars')(app)
require('./routes/getYears')(app)
require('./routes/getMake')(app)
require('./routes/getModel')(app)

mongoose.connect('mongodb://localhost:27017/autoForm', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err))

const PORT = process.env.PORT || 5000

// test code start



// test code end
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})
const zipcode = require('../models/ZipCode')

module.exports = (app) => {
    app.get('/getzip', (req, res) => {
        zipcode.find({}, (err, data) => {
            let getZip = data.map(({zip}) => zip)

            console.log(getZip)
            res.send('done')
        })
    })
}
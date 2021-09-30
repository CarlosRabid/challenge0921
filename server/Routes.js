const express = require('express')
const router = express.Router()
const request = require('request')
const Form = require('./models/Form');
const Shift = require('./models/Shift');
const Observation = require('./models/Observation');
const Turtle = require('./models/Turtle');
const Nest = require('./models/Nest');
const Beach = require('./models/Beach');
// const UserLogin = require('./models/UserLogin');

/* Route requests */

router.get('/forms', (req, res) => {
    Form.find({}, (err, forms) => console.log(err))
        .populate({
            path: 'turtle nest shift observation',
            populate: {
                path: 'location'
            }
        })
        .exec((err, forms) => {
            res.send(forms)
        })
})

router.post('/observation', (req, res) => {
    let newObservation = new Observation({
        comments: req.body.comments,
    })
    newObservation.save()
    res.send(newObservation)
})


router.get('/moonData', (req, res) => {
    let lat = 7.5303400;
    let long = -80.0269900;
    let apiAdd = `https://api.solunar.org/solunar/${lat},${long},20191018,-5`

    request(apiAdd, function (error, response, body) {
        let fulldataMoon = JSON.parse(body)
        let dataMoon = {
            sunrise: fulldataMoon.sunRise,
            suntransit: fulldataMoon.sunTransit,
            sunset: fulldataMoon.sunSet,
            moonrise: fulldataMoon.moonRise,
            moonunder: fulldataMoon.moonUnder,
            moonphase: fulldataMoon.moonPhase,
            moonillumination: fulldataMoon.moonIllumination
        }
        console.log(fulldataMoon)
    })

    res.send(dataMoon)
})


module.exports = router
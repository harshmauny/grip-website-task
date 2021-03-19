const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Person = require('../models/person');

router.get('/', (req, res, next) => {
    Person.find()
        .exec()
        .then(PersonList => {
            return res.status(200).json({
                personlist: PersonList
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err.error
            })
        })
})

router.post('/new', (req, res, next) => {
    const person = new Person({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        mobile: req.body.mobile,
        college: req.body.college,
        email: req.body.email,
        gender: req.body.gender,
        country: req.body.country,
        internship: req.body.internship
    })

    person.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'New person!',
                person_data: result,
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router;
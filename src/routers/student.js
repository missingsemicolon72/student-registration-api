const express = require('express');
const Student = require('../models/students');
const router = new express.Router();

router.get('/students', async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.status(200).send(studentsData);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if(!studentData)
            res.status(404).send('ERROR: Student Record Not Found!');
        else
            res.status(200).send(studentData);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post('/students', (req, res) => {
    const student = new Student(req.body);
    student.save().then(() => {
        res.status(201).send(student);
    }).catch((e) => {
        res.status(400).send(e);
    });
})

router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateResult = await Student.findByIdAndUpdate(_id, req.body, { new: true });
        if(!updateResult)
            res.status(400).send('ERROR: Student Record Not Found!');
        else
            res.status(200).send(updateResult);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.delete('/students/:id', async (req, res) => {
    try {
        const deleteResult = await Student.findByIdAndDelete(req.params.id);
        if(!deleteResult)
            res.status(400).send('ERROR: Student Record Not Found!');
        else
            res.status(200).send(deleteResult);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;
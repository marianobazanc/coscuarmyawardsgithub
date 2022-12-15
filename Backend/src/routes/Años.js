const express = require("express")
const verifyToken = require("../middleware/validateToken")
const router = express.Router()
const añosSchema = require("../models/Años")

router.post("/Years", verifyToken, (req, res) => {
    const premio = añosSchema(req.body)
    premio.save()
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

router.get("/Years", (req, res) => {
    añosSchema.find()
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

router.get("/Years/:id", (req, res) => {
    const {id} = req.params
    añosSchema.findById(id)
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

router.put("/Years/:id", verifyToken, (req, res) => {
    const {id} = req.params
    const {año2018, año2019, año2020, año2021} = req.body
    añosSchema.updateOne({_id: id}, {$set: {año2018, año2019, año2020, año2021}})
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

router.delete("/Years/:id", verifyToken, (req, res) => {
    const {id} = req.params
    añosSchema.remove({_id: id})
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

module.exports = router
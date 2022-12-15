const express = require("express")
const verifyToken = require("../middleware/validateToken")
const router = express.Router()
const personaSchema = require("../models/Persona")

//Crear una persona
router.post("/Personas", verifyToken, (req, res) => {
    const persona = personaSchema(req.body)
    persona.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Obtener todas las personas
router.get("/Personas", (req, res) => {
    personaSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Obtener una sola persona
router.get("/Personas/:id", (req, res) => {
    const {id} = req.params
    personaSchema.findById(id)
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

//Actualizar una persona
router.put("/Personas/:id", verifyToken, (req, res) => {
    const {id} = req.params
    const {usuario, nombre, icono, redes, ternas} = req.body 
    personaSchema.updateOne({_id: id}, {$set: {usuario, nombre, icono, redes, ternas}})
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

//Eliminar una persona
router.delete("/Personas/:id", verifyToken, (req, res) => {
    const {id} = req.params
    personaSchema.remove({_id: id})
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

module.exports = router
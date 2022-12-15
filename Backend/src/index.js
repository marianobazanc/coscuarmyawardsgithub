const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const cors = require("cors")

const app = express()
let corsOption = {
    origin: "*",
    optionsSuccessStatus: 200
}

app.use(cors(corsOption))
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json())

const PORT = process.env.PORT || 4000

require("dotenv").config()

//Importacion de rutas
const personasRoute = require("./routes/Personas")
const añosRoute = require("./routes/Años")

//Manejo rutas
app.get("/", (req, res) => {
    res.send("API Coscu Army Awards - MERN")
})

app.use("/api", personasRoute)
app.use("/api", añosRoute)

//Conexion con mongoDB 
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Conexion a la base de datos exitosa!"))
.catch((error) => console.log(error))

app.listen(PORT, () => console.log("El servidor esta funcionando correctamente", PORT))
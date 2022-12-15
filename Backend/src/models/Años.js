const mongoose = require("mongoose")

const añosSchema = mongoose.Schema({
    año2018:{
        ternas:{
            type: Array
        }
    },
    año2019:{
        ternas:{
            type: Array
        }
    },
    año2020:{
        ternas:{
            type: Array
        }
    },
    año2021:{
        ternas:{
            type: Array
        }
    }
})

module.exports = mongoose.model("Años", añosSchema)
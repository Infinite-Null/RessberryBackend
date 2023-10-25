const mongoose = require("mongoose")

const modalSchema = new mongoose.Schema({
    rate: {
        type: Number,
        required: [true, "Please give heart rate"],
    },
})

module.exports = mongoose.model("Model", modalSchema)

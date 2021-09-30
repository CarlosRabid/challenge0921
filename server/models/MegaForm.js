const mongoose = require('mongoose')
const Schema = mongoose.Schema

const megaFormSchema = new Schema({
    observation: {
        comments: String,
    }
})

const MegaForm = mongoose.model("MegaForm", megaFormSchema)
module.exports = MegaForm
const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title: String,
    desc: String,
    body: String
})

module.exports = mongoose.model("blog", blogSchema)
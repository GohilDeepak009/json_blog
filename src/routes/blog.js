const express = require("express")
const Blog = require("../../model/blog_model")

const router = express.Router()

router.post("/", async (req, res) => {
    try {

        let blog = new Blog(req.body)
        let doc = await blog.save()
        res.send(doc)

    } catch (error) {

        console.log(error)
        res.status(400).send(error)
    }
})

router.get("/", async (req, res) => {
    try {

        let blogs = await Blog.find()
        res.send(blogs)

    } catch (error) {

        console.log(error)
        res.status(400).send(error)

    }
})

router.get("/:id", async (req, res) => {
    try {

        let blog = await Blog.findOne({ _id: req.params.id })
        res.send(blog)

    } catch (error) {

        console.log(error)
        res.status(400).send(error)

    }
})

router.patch("/:id", async (req, res) => {
    try {

        let doc = await Blog.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.send(doc)

    } catch (error) {

        console.log(error)
        res.status(400).send(error)

    }
})

router.delete("/:id", async (req, res) => {
    try {

        let doc = await Blog.findByIdAndDelete({ _id: req.params.id })
        res.send(doc)

    } catch (error) {

        console.log(error)
        res.status(400).send(error)

    }
})


module.exports = router
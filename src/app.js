require("./conn")
const express = require("express")
const blog_route = require("./routes/blog")

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use("/blog", blog_route)

app.all("*", (req, res) => {
    res.status(404).send({
        error: "404 page not found"
    })
})

app.listen(3000, () => {
    console.log(`Server listening on port ${PORT}`)
})
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://root:root@cluster0.xosaaoq.mongodb.net/my_db")
    .then(() => {
        console.log("Successfully Connected to Database")
    })
    .catch((err) => {
        console.log("[!ERROR] " + err)
    })
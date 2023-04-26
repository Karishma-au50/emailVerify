const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/task", { useNewUrlParser: true, useUnifiedTopology: true },

)

const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    firstName: String,
    role: {
        type: String,
        enum: ["supplier", "agent"],
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: String,
    updatedBy: String,
    updatedAt: {
        type: Date,
        default: Date.now
    },
    date: Date,
    password: String,
    email: String,
    is_varified : {
        type : Number ,
        default : 0
    }

})

const User = new mongoose.model("users_datas", userSchema);

app.listen(5000, () => {
    console.log("Listening to MongoDB on port 5000")
})

module.exports = User;
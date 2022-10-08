const express = require('express')
const app = express()
const router = express.Router()

const User = require('../model/user.model')
app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user)
    } catch (err) {
        res.send("Err : " + err)
    }
})


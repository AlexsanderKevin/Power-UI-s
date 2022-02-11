const express = require("express")
const app = express()
const porta = 3001

app.use(express.static('public'))

app.listen(porta, () => {
    console.log(`Running at port: ${porta}`)
})
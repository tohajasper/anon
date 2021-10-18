if (process.env.NODE_ENV != 'production') require('dotenv').config()
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const PORT = 4000
const cors = require('cors')
const UserController = require('./controllers/UserController')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/register', UserController.register)
app.post('/login', UserController.login)
app.patch('/user/:id', UserController.updateAvatar)
app.patch('/user/add-wallet/:id', UserController.addWallet)
app.patch('/user/buy-item/:id', UserController.buyItem)

server.listen(PORT, () => {
    console.log(`this app is listening to http://localhost:${PORT}`)
})


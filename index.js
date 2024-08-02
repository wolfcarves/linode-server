import express from 'express'
import { users } from './src/contants.js'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.status(200).json({
        message: `Hello World, on port ${port}!`
    })
})

app.get('/users', (req, res) => {
    return res.status(200).send({
        users
    })
})

app.listen(port, "0.0.0.0", () => console.log(`server is running on port ${port}`))
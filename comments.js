// Create web server
// 1. Create a web server
// 2. Create a route /comments
// 3. Return a JSON response (any data)
// 4. Start the server and test your work!

const express = require('express')
const app = express()
const port = 3000

app.get('/comments', (req, res) => {
    res.send({
        name: 'Duy',
        age: 20
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
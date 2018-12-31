// dependencies
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

// constants
const app = express()

// variables
const port = process.env.PORT || 3000

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())











app.get('/', (req, res) => res.json('hi'))




// starts server
app.listen(port, () => console.log(`Server listening on port ${port}!`))
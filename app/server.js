const express = require('express')
const bodyParser = require('body-parser')

let app = express()
const port = process.env.PORT || 3000
const def = '0.0.0.0'

app.use(bodyParser.raw({
    extended: true
}))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

require('./models/db')

app.get('/', (req, res, next) => {
    res.json({
        'message': 'Welcome to My Food application!'
    })
})


const noteRouter = require('./router/food.router')
noteRouter(app)

app.listen(port, def, () => {
    console.log(`Express server started at port: ${port}`)
})

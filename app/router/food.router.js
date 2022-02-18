const food = require("../controller/food.controller");
module.exports = /controller/food.controller')

// big food

app.get('/bigfood', food.getBigFood)

app.post('/bigfood', food.setBigFood)

app.delete('/bigfood', food.deleteAllBigFood)



// food

app.get('/food', food.getFood)

app.post('/food', food.setFood)

app.put('/food', food.updateFood)

app.delete('/food', food.deleteFood)

app.delete('/food', food.deleteAllFood)
(app) => {
    const food = require('..


    // order

    app.post('/order', food.order)

    app.delete('/order', food.deleteOrder)


}

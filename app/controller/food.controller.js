const connection = require('../models/db')

const UNDEFINED = 'undefined'
const MESSAGE_SUCCESSFULLY = 'successfully'
const STATUS_CODE_200 = 200


function isUndefined(value) {
    return typeof value === UNDEFINED;
}

function getResult(content, status, message) {
    return {
        content: content,
        message: message,
        status: status
    }
}

module.exports.getBigFood = (req, res) => {
    let sql = `SELECT * FROM tbl_big_food`
    connection.query(sql, (error, bigFood) => {
        if (error) {
            res.status(500).send({
                message: error.message || 'Some error'
            })
        } else {
            // let big = []
            // for (let i = 0; i < bigFood.length; i++) {
            //
            //     let list_image = []
            //     // if (bigFood[i].list_image.length > 1) {
            //         let image = bigFood[i].list_image.split(';')
            //     console.log(image.length)
            //         for (let j = 0; j < image.length; j++) {
            //             list_image.push(image[i])
            //         }
            //     // } else {
            //     //     list_image.push(bigFood[i].list_image)
            //     // }
            //
            //     console.log(list_image.toString())
            //
            //     big.push({
            //         id: bigFood[i].id,
            //         name: bigFood[i].name,
            //         price: bigFood[i].price,
            //         list_image: list_image
            //     })
            // }
            let content = {
                datalist: bigFood
            }
            let result = getResult(content, STATUS_CODE_200, MESSAGE_SUCCESSFULLY)
            res.send(result)
        }
    })
}

module.exports.setBigFood = (req, res) => {

    let bigFood = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        list_image: req.body.list_image
    }
    let sql = 'INSERT INTO tbl_big_food SET ?'
    connection.query(sql, bigFood, ((error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || 'Some error'
            })
        } else {
            let content = {
                item: {
                    id: bigFood.id,
                    name: bigFood.name,
                    price: bigFood.price,
                    list_image: arr
                }
            }
            let result = getResult(content, STATUS_CODE_200, MESSAGE_SUCCESSFULLY)
            res.send(result)
        }
    }))
}

module.exports.deleteAllBigFood = (req, res) => {
    let sql = 'DELETE from tbl_big_food'
    connection.query(sql, ((error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || 'Some error'
            })
        } else {
            let content = {}
            let result = getResult(content, STATUS_CODE_200, "Delete all successfully")
            res.send(result)
        }
    }))
}


// food

module.exports.getFood = (req, res) => {
    let sql = `SELECT * FROM tbl_food`
    connection.query(sql, (error, food) => {
        if (error) {
            res.status(500).send({
                message: error.message || 'Some error'
            })
        } else {
            let content = {
                datalist: food
            }
            let result = getResult(content, STATUS_CODE_200, MESSAGE_SUCCESSFULLY)
            res.send(result)
        }
    })
}

module.exports.setFood = (req, res) => {
    let food = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
    }
    let sql = 'INSERT INTO tbl_food SET ?'
    connection.query(sql, food, ((error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || 'Some error'
            })
        } else {
            let content = {
                item: {
                    id: food.id,
                    name: food.name,
                    price: food.price,
                    image: food.image
                }
            }
            let result = getResult(content, STATUS_CODE_200, MESSAGE_SUCCESSFULLY)
            res.send(result)
        }
    }))
}

module.exports.updateFood = (req, res) => {
    let food = [
        req.body.name,
        req.body.price,
        req.body.image,
        req.body.id
    ]
    let sql = 'UPDATE tbl_food SET name = ?, price = ?, image = ? WHERE id = ?'
    connection.query(sql, food, ((error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || 'Some error'
            })
        } else {
            let content = {
                item: {
                    name: food[0],
                    price: food[1],
                    image: food[2],
                    id: food[3],
                }
            }
            let result = getResult(content, STATUS_CODE_200, MESSAGE_SUCCESSFULLY)
            res.send(result)
        }
    }))
}

module.exports.deleteFood = (req, res) => {
    let id = req.query.id
    let sql = 'DELETE from tbl_food WHERE id = ?'
    connection.query(sql, id, ((error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || 'Some error'
            })
        } else {
            let del = {
                id: id,
                message: `Delete food successfully`
            }
            let content = {
                item: del
            }
            let result = getResult(content, STATUS_CODE_200, MESSAGE_SUCCESSFULLY)
            res.send(result)
        }
    }))
}

module.exports.deleteAllFood = (req, res) => {
    let sql = 'DELETE from tbl_food'
    connection.query(sql, ((error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || 'Some error'
            })
        } else {
            let content = {}
            let result = getResult(content, STATUS_CODE_200, "Delete all successfully")
            res.send(result)
        }
    }))
}


// order

module.exports.order = (req, res) => {

}

module.exports.deleteOrder = (req, res) => {

}



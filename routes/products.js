const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando GET dentro da rota de produtos"
    })
})

router.get('/:product_id', (req, res, next) => {
    id = req.params.product_id

    if(id == 1){
        res.status(200).send({
            mensagem: "Random Product",
            id: id
        })
    } else {
        res.status(404).send({
            mensagem: "Id not found",
        })
    }

})

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando POST dentro da rota de produtos"
    })
})

module.exports = router;

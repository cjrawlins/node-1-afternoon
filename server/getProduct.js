const products = require('../products.json');

const getProduct = (req, res) => {
    const prod = products.find( e => e.id === +req.params.id);
    if (!prod) {
        res.status(500).send('Item not in list')
    }
    res.status(200).send(prod)
}


module.exports = getProduct;
const products = require('../products.json');

const getProducts = (req, res) => {
    const {price} = req.query
    const byPrice = products.filter( e => e.price >= +req.query.price )
        res.status(200).send(byPrice);
}


module.exports = getProducts;
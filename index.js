const express =require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const products = [
    {id: 1, name: 'Router', price: 100},
    {id: 2, name: 'Switch', price: 50},
    {id: 3, name: 'Hub', price: 30},
    {id: 4, name: 'Access Point', price: 80}
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).send('Product not found');
    }
    res.json(product);
});


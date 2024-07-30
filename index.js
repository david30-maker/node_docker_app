const express =require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const products = [
    {id: 1, name: 'Router', price: 100},
    {id: 2, name: 'Switch', price: 50},
    {id: 3, name: 'Hub', price: 30},
    {id: 4, name: 'Access Point', price: 80}
];
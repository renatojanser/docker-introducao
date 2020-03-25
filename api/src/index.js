const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'msyql-container',
    user: 'root',
    password: 123456,
    database: 'programadorabordo'
});

connection.connect();

app.get('/products', (req, res) => {
    connection.query('SELECT * FROM products', (error, result) => {
        if (error) {
            throw error
        }

        res.send(results.map(item => ({ 
                name: item.name, 
                price: item.price 
        })));
    });
});

app.listen(9001, '0.0.0.0', () => {
    console.log('Listening on port 9001');
});
const express = require('express');
const mongoose = require('mongoose'); 
const redis = require('redis');

const app = express();

// Connect to Redis
const redis_port = 6379;
const redis_host = 'redis';

const redisClient = redis.createClient({
    url: `redis://${redis_host}:${redis_port}`
});

redisClient.on('error', err => console.log('Redis Client Error:', err));
redisClient.on('connect', () => console.log('Connected to Redis'));
redisClient.connect();

// Connect to MongoDB
const db_user = 'root';
const db_password = 'example';
const db_port = 27017;    
const db_host = 'mongo';
const uri = `mongodb://${db_user}:${db_password}@${db_host}:${db_port}`;

mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`App is up and running on port ${port}`));

app.get('/', (req, res) => {
    redisClient.set('products', 'products ......');
    res.send("Hello, Aliennnn! Are you hearing me, dev?");
});

app.get('/data', async (req, res) => {
    try {
        const product = await redisClient.get('products');
        res.send(`Hello, Aliennnn! Are you hearing me, dev? <h1>${product}</h1>`);
    } catch (err) {
        res.status(500).send("Error fetching data from Redis");
    }
});

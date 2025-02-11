//Create Simple server
//import to 
const express = require('express');
const mongoose = require('mongoose'); 

//Initilization
const app = express();

//Connect to db
const db_user ='root' ;
const db_password = 'example';
const db_port = 27017;    
const db_host = 'mongo';
const uri = `mongodb://${db_user}:${db_password}@${db_host}:${db_port}`;
mongoose.connect(uri).then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));

//Poer that Server will run it  
const port = process.env.port || 8000;  //by defult 8000 but can use any port 

// to make server listen / response requestesstarting `node ./src/index.js`
app.listen(port, () => console.log(`App is up and running on port ${port}`));

app.get('/', (req, res) => {res.send("Hello, Aliennnn Are u heare mee  dev ???!");});

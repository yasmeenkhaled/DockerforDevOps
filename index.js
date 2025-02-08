//Create Simple server
//import to 
const express = require('express');

//Initilization
const app = express();
//Poer that Server will run it  
const port = process.env.port || 8000;  //by defult 8000 but can use any port 

// to make server listen / response requestes
app.listen(port, () => console.log(`App is up and running on port ${port}`));

app.get('/', (req, res) => {res.send("Hello, Aliennnn Are u heare mee // dev ???!");});

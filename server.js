const express = require('express');    //importing dependencies
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const port = 8000;

const app = express(); // Instance. In Java means object. 
                       // It is used instead of Object in particular occasions such as this exercise itself.

app.use(express.static('website')); //express.static sets directory to server for static resources such as img, css stylesheets, js scripts...
                                //the parameter is called 'root'.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());  //configuring Express to use body-parser as middleware
app.use(cors()); //cors for cross origin allowance.

const server = app.listen(port, () => console.log(`App listening on port: ${port}`));
const appData = []; //endpoint array container

app.post('/data', function addData (req,res) {
    let data = req.body;
    let newEntry = {
        name: data.name
    };
    appData.push(newEntry);
    console.log(newEntry);
    console.log(appData);
});

app.get('/data', (req, res) => {
    res.send(appData);
});

// CLIENT SIDE SERVER BELOW

const postData = async (url = '', data = {}) => {
    const res = await fetch (url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log('error', error);
    };
};

postData(`http://localhost:${port}/data`, {name: 'Claudio'});
postData(`http://localhost:${port}/data`, {name: 'Example'});

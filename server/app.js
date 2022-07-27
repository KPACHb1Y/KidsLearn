const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Server connect')
});

app.listen(5000, () =>{
    console.log(`Server has been started on port 5000...`)
})
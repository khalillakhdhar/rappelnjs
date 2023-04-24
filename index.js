// appel de express 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies les formulaires
app.use(bodyParser.json()); // support json encoded bodies les json api REST

const port=4000;
app.get('/', (req, res) => {
    // http://localhost:4000/
    res.send('Hello JS!');
});

app.get("hi",sayHi());

app.get('/hello/:nom/:prenom',(req,res) => {
res.send(`Hello ${req.params.nom} ${req.params.prenom}!`);
});

// post testing
app.post('/send',(req,res) => {
    console.log(req.body);
    res.send(req.body);
})
app.put('/update',(req,res) => {
    console.log(req.body);
    res.send(req.body);
})


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

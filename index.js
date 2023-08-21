const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//app.use(express.static(__dirname + '/public'))

// Motor de Plantillas o Vistas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/',(req, res) =>{
    res.render('index', {
        titulo: 'Index con EJS',
        parametro: 'Chiquita 🥵👌'
    })
});

app.get('/lenguajes', (req, res) => {
    //res.send(__dirname + '/public');
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
// Indicamos que libreria se va a usar, en este caso Express.
var express = require('express');
// Es el objeto encargado de hacer el management de todas las rutas de la app.
var router = express.Router();

/* GET home page. */
// req -> request -> Objeto que contiene información acerca de la petición realizada por el usuario.
// res -> response -> Respuesta que se le dará al usuario cuando haga esta petición.
router.get('/', function(req, res, next) {
  
  const products = [ 
    { name:"Microondas", price:45, existencias:6 },
    { name:"Frigorífico", price:200, existencias:4 },
    { name:"Lámpara", price:25, existencias:14 },
    { name:"TV", price:50, existencias:8 },
    { name:"Lavadora", price:290, existencias:3 },
    { name:"Secadora", price:180, existencias:5 }
  ];
  // index es el nombre de una plantilla y title es un nombre de variable en la plantilla.
  res.render('index', { title: 'PEpoe', products });
});

module.exports = router;

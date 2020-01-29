// Indicamos que libreria se va a usar, en este caso Express.
var express = require('express');
// Es el objeto encargado de hacer el management de todas las rutas de la app.
var router = express.Router();
// cargamos los productos que exportamos desde el fichero products.js de MODELS.
var products = require( '../models/products' );

/* GET home page. */
// req -> request -> Objeto que contiene información acerca de la petición realizada por el usuario.
// res -> response -> Respuesta que se le dará al usuario cuando haga esta petición.
router.get('/', function(req, res, next) {
  // index es el nombre de una plantilla y title es un nombre de variable en la plantilla.
  res.render('index', { title: 'PEpoe', products });
});

router.get('/products/:ref', function(req, res, next) {
  var ref = req.params.ref;
  const product =products.find( function( p ){ return p.ref == ref } );
  res.render('product', { product });
});

module.exports = router;

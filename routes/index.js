// Indicamos que libreria se va a usar, en este caso Express.
var express = require('express');
// Es el objeto encargado de hacer el management de todas las rutas de la app.
var router = express.Router();
// cargamos los productos que exportamos desde el fichero products.js de MODELS.
var products = require( '../models/products' );
// Importamos el modelo de datos de los usuarios.
var users = require( '../models/users' );

/* GET home page. */
// req -> request -> Objeto que contiene información acerca de la petición realizada por el usuario.
// res -> response -> Respuesta que se le dará al usuario cuando haga esta petición.
router.get('/', function(req, res, next) {
  // Recuperamos el username de la sesion.
  const username = req.session.username;
  // index es el nombre de una plantilla y title es un nombre de variable en la plantilla.
  res.render('index', { title: 'PEpoe', username, products });
});

router.get('/products/:ref', function(req, res, next) {

  // Cojo la referencia del request.
  var ref = req.params.ref;
  // Busco entre los productos del array el que coincide con la referencia.
  const product = products.find( function( p ){ return p.ref == ref } );

  if( product ){
    // Después de encontrar el producto se lo pasamos a la plantilla.
    res.render('product', { product });
  }else{
    // Si no encontramos el producto con la referencia especificada redirigimos a la página de error.
    res.redirect("/error");
  }

});

var cesta = []; // provisional.

router.post("/comprar", function( req, res, next ){
    // Recupero la referencia desde el request y después recupero el objeto product adecuado para
    // pasarle al array de cesta.
    const ref = req.body.ref;
    const product = products.find( function( p ){ return p.ref == ref } );

    // Añadimos producto a la cesta.
    cesta.push( product );
    // Redirigimmos a la portada / página de productos.
    res.redirect("/");
});

router.get("/login", function( req, res,next ){
  res.render('login', { });
});

// Arriba definimos la ruta del GET y ahora definimos la ruta del POST para que cuando
// pulsemos el botón de submit del formulario el method definido en el formulario
// sea recogido por este enrutamiento
router.post("/login", function( req, res,next ){
  // Esto
  const username = req.body.username;
  const password = req.body.password;
  // Y esto hacen lo mismo.
  //-----> const { username, password } = req.body;
  // Se llama DECONSTRUCCIÓN DEL OBJETO. Buscará en body un atributo llamado igual 
  // y se lo asignará. En caso de que no exista devolverá undefined.
  
  const user = users.find( function( u ){ return u.username == username && u.password == password } );
  if( user ){
    // TODO: generar cookie
    req.session.username = username;
    res.redirect("/");
  }else{
    // TODO: inyectar mensaje de error
    res.render('login', {})
  }
});

module.exports = router;

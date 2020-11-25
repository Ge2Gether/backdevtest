const UsuarioController = require('../controllers/UsuarioController');

module.exports = (app) => {
   app.post('/usuario', UsuarioController.post);
   app.get('/usuarios', UsuarioController.get);
   app.get('/usuario/:id', UsuarioController.getById);
}
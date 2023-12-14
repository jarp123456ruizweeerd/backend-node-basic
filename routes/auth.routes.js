const { Router } = require('express')
const { check } = require('express-validator');
const { login } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validacion-campos');

const router = Router();

router.post('/login',
    [
        check('correo', 'El correo es obligatorio').isEmail(),
        check('password', 'Se requiere de una contraseña').not().isEmpty(),
        validarCampos]

    , login);


module.exports = router;
const { Router } = require('express')
const { check } = require('express-validator');
const { login, sigIn } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validacion-campos');

const router = Router();

router.post('/login',
    [
        check('correo', 'El correo es obligatorio').isEmail(),
        check('password', 'Se requiere de una contraseña').not().isEmpty(),
        validarCampos]

    , login);
router.post('/google',
    [
        check('id_token', 'Se requiere el token').not().isEmpty(),
        validarCampos]
    , sigIn);

module.exports = router;
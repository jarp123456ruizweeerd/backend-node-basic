const { Router } = require('express')
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/users.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validacion-campos');
const { validarRol, validarEmail, validarId } = require('../helpers/db-validators');
const router = Router();

router.get('/', usuariosGet);

router.post('/', [
    check('id', 'NO es un id valido').isMongoId(),
    check('id').custom((id) => {
        validarId(id);
    }),
    check('nombre', 'Nombre requerido').not().isEmpty(),
    check('correo', 'Correo Invalido').isEmail(),
    check('correo').custom((c) => validarEmail(c)),
    check('password', 'Ingresa al menos 6 caracteres').isLength({ min: 6 }),
    // check('rol','No es un rol permitido').isIn(['ADMIN','USUARIO']),
    check('rol').custom((r) => validarRol(r)),
    validarCampos,
], usuariosPost)

router.put('/:id', [
    check('id', 'Este id no es correcto').isMongoId(),
    validarCampos
], usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/:id', [
    check('id', 'NO es un id valido').isMongoId(),
    check('id').custom((id) => validarId(id)),
    validarCampos,
], usuariosDelete)

module.exports = router;

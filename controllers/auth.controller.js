const {request, response} = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');

const login = async (req = request, res = response) => {

    const {correo, password} = req.body;
    try {
        //Verificar email
        const usuario = await Usuario.findOne({correo});

        if(!usuario){
            return res.status(404).json({
                msg : `No se encontro el correo: ${correo}`
            })
        }

        //Verificar si esta activo
        if(!usuario.estado){
            return res.status(404).json({
                msg : `El usuario no esta activo- estado`
            })
        }

        //Verificar pass
        const validarPass = bcryptjs.compareSync(password, usuario.password);
        if(!validarPass){
            return res.status(404).json({
                msg : `El usuario erroneo - password`
            })
        }

        //Generar JWT
        const token = await generarJWT(usuario.id);

        res.json({
            msg: 'Login Online',
            usuario,
            token
        })

    } catch (error) {
        res.json({
            msg : 'Error: ', error
        })
        
    }


}

module.exports = {
    login,
}
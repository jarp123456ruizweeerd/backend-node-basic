const { response, request } = require('express')


const usuariosGet = (req = request, res = response) => {
    
    const query = request.query
    
    res.json({
        msg: 'get API - controllador',
        query
    })
}

const usuariosPost = (req, res) => {

    const body = req.body;


    res.json({
        msg: 'post API',
        body
    })
}
const usuariosPut = (req, res) => {

    const id = req.params.id;


    res.json({ msg: 'put API', id })
}

const usuariosPatch = (req, res) => {
    res.json({ msg: 'patch API' })
}

const usuariosDelete = (req, res) => {
    res.json({ MSG: 'delete API' })
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete,
}
const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const UsuarioSchema = new Schema({
    nombre:{
        type:String,
        required : [true, 'El nombre es requerido']
    },
    correo:{
        type: String,
        required: [true, 'El correo es requerido'],
        unique : true
    },
    password:{
        type: String,
        required:[true, 'La contraseña es requerida'],
    },
    img:{
        type: String,
    },
    rol:{
        type:String,
        required:true,
        enum : ['ADMIN', 'USUARIO'] 
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type:Boolean,
        default: false
    }
})

UsuarioSchema.methods.toJSON= function(){
    const {__v, password, ...usuario} = this.toObject();
    return usuario;
}

module.exports = model('Usuario',UsuarioSchema);
const jwt = require('jsonwebtoken');

const generarJWT = async (uid = '') => {

    return new Promise((resolve, reject) => {
        const payload = { uid };

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn : '5h'
        }, (error, token) => {
            if(error){
                console.log(error);
                reject('Surgio un error');
            }else{
                resolve(token);
            }
        })
    })

}


module.exports = {
    generarJWT
}
const { response } = require('express')
const bcrypt = require('bcryptjs')
const Usuario = require('../models/Usuario')
const { generarJWT } = require('../helpers/jwt')

const crearUsuario = async( req , res = response ) => {

    const { email , password } = req.body

    try {

        //Validar campo Email

        let usuario = await Usuario.findOne({ email }) 
        
        if( usuario ) {
            return res.status(400).json({
                ok:false,
                msg:'El usuario ya existe con ese correo'
            })
        }


         usuario = new Usuario( req.body )

        // Encriptar password
        // hash / number of round -> 10 por defecto
        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync(password, salt)


        //Generar JWT
        
        const token = await generarJWT( usuario.id , usuario.name )


        await usuario.save()

    
        res.status(201).json({
            ok:true,
            uid:usuario.id,
            name:usuario.name,
            token
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'Por favor hable con el administrador'
        })
    }
{}

}

const loginUsuario = async( req , res = response ) => {
 
    const { email , password } = req.body

    try {

         const usuario = await Usuario.findOne({ email }) 
        
        if( !usuario ) {
            return res.status(400).json({
                ok:false,
                msg:'El usuario no existe con ese correo'
            })
        }

        //Confirmar Password

        const validPassword = bcrypt.compareSync( password , usuario.password)
        if( !validPassword ) {
            return res.status(400).json({
                ok:false,
                msg:'Contraseña incorrecta'
            })
        }


        //Generar JWT
        const token = await generarJWT( usuario.id , usuario.name )
        

        res.json({
            ok:true,
            uid:usuario.id,
            name:usuario.name,
            token
        })

        
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Por favor hable con el administrador'
        })
    }


    
}


const revalidarToken =  async( req , res ) => {

    const { uid , name } = req;
  
    //Generar JWT
    
    const token = await generarJWT( uid , name )

    res.json({
        ok:true,
        token
    })
}

module.exports = {
    crearUsuario , 
    loginUsuario ,
    revalidarToken,
}
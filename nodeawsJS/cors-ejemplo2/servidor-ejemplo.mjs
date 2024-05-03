import http from 'node:http'
import fps from 'node:fs/promises'
import path from 'node:path'

const servidor = http.createServer((peticion, respuesta)=>{
    
    if(peticion.method === "GET"){
        if(peticion.url === "/"){

            respuesta.statusCode = 200
            respuesta.end("La ruta es assa")
        }
        else if(peticion.url === "/proceso-formulario"){
            let DatosCompletos = "";
            peticion.on('data',(pedacitos)=>{
                DatosCompletos = DatosCompletos + pedacitos
            })
            peticion.on('error',(error)=>{
                respuesta.statusCode = 500
                respuesta.end("Hubo un error")
            })
            peticion.on('end',()=>{
                console.log(DatosCompletos)
                respuesta.statusCode = 200
                respuesta.end("Datos Recibidos")
            })
        }
        else{
            respuesta.statusCode = 404
            respuesta.end()
        }
    }
})

servidor.listen(3000)
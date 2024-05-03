const formulario = document.getElementById('formulario')

formulario.addEventListener('submit',(evento)=>{
    //evento.preventDefault()
    console.log("envio form")
    const datos = new FormData(formulario)
    const datosFormulario = Object.fromEntriesentries(datos)
    //console.log(datosFormulario)
    fetch(formulario.action),{
        method:formulario.action
        
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(datosFormulario)
    }.then((respuesta)=>{
        console.log(respuesta)
    }).catch(respuesta)
})


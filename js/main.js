function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'El campo nombre no debe estar vacio'
    }
    if (nombre.length >= 50) {
        return 'El campo nombre debe tener menos de 50 caracteres'
    }
    if (!/^[a-z]+$/i.test(nombre)) {
        return 'El campo nombre solo acepta letras'
    }
    return ''
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return 'Debes seleccionar una ciudad'
    }
    return ''
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'El campo regalo no puede estar vacio'
    }
    else if (descripcionRegalo.length >= 100) {
        return 'El campo regalo debe tener menos de 100 caracteres'
    }
    else if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return 'El campo descripción solo puede tener numeros y letras'
    }
    else {
        return ''
    }
}

function validarFormulario(event) {
    const $form = document.querySelector('#carta-a-santa')

    const nombre = $form.nombre.value
    const ciudad = $form.ciudad.value
    const descripcionRegalo = $form['descripcion-regalo'].value

    const errorNombre = validarNombre(nombre)
    const errorCiudad = validarCiudad(ciudad)
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo)

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }

    const esExito = manejarErrores(errores) === 0

    if (esExito) {
        $form.className = 'oculto'
        document.querySelector('#exito').className = ''
        setTimeout(function () { //tarea: redirigir a otra pagina al pasar 5 segundos...
            window.location.href = "wishlist.html"
        }, 5000);

    }

    event.preventDefault();
}

function manejarErrores(errores) {
    const keys = Object.keys(errores)
    const $errores = document.querySelector('#errores')
    $errores.innerHTML = '' //tarea: arregla error que hacia que se repitan los elementos de la lista...
    let cantidadErrores = 0

    keys.forEach(function (key) {
        const error = errores[key]

        if (error) {
            cantidadErrores++
            $form[key].className = "error"

            const $error = document.createElement('li')
            $error.innerText = error
            $errores.appendChild($error)

        } else {
            $form[key].className = ""
        }
    })
    return cantidadErrores

    //     errorNombre = errores.nombre; //nombre
    //     errorCiudad = errores.ciudad; //ciudad
    //     errorDescripcionRegalo = errores.descripcionRegalo; //desc

    //     if (errorNombre) {
    //         $form.nombre.className = "error"
    //     } else {
    //         $form.nombre.className = ""
    //     }

    //     if (errorCiudad) {
    //         $form.ciudad.className = "error"
    //     } else {
    //         $form.ciudad.className = ""
    //     }

    //     if (errorDescripcionRegalo) {
    //         $form["descripcion-regalo"].className = "error"
    //     } else {
    //         $form["descripcion-regalo"].className = ""
    //     }
    // 
}

const $form = document.querySelector('#carta-a-santa')
$form.onsubmit = validarFormulario

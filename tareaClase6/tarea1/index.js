const btnGenerarFormularios = document.querySelector('#btn-generar-formularios')

btnGenerarFormularios.onclick = function () {
    let cantidadDeMiembros = Number(document.querySelector('#cantidad-de-miembros').value)
    let formulario2 = document.querySelector('#formulario-2')

    formulario2.innerHTML = `<h3>Edad de los miembros:</h3>`

    for (i = 1; i <= cantidadDeMiembros; i++) {
        formulario2.innerHTML += `
            <br>
            <label for="edad-miembro-${i}">Ingrese la edad del miembro ${i}</label>
            <input type="number" required min="0" id="edad-miembro-${i}"
            <br>
        `
    }


    document.querySelector('#btn-calcular').className = ''

    return false
}

const btnCalcular = document.querySelector('#btn-calcular')

btnCalcular.onclick = function () {
    let cantidadDeMiembros = Number(document.querySelector('#cantidad-de-miembros').value)
    let edades = []

    for (i = 1; i <= cantidadDeMiembros; i++) {
        let edad = Number(document.querySelector(`#edad-miembro-${i}`).value)
        edades.push(edad)
    }

    function calcularMayor() {
        let edadMayor = Math.max(...edades)
        return edadMayor
    }

    function calcularMenor() {
        let edadMenor = Math.min(...edades)
        return edadMenor
    }

    function calcularPromedio() {
        let acumulador = 0
        for (i = 0; i < edades.length; i++) {
            acumulador += edades[i]
        }
        let promedio = acumulador / edades.length
        return promedio
    }

    const mayorEdad = document.querySelector('#mayor-edad')
    mayorEdad.textContent = `El miembro mayor de su familia tiene ${calcularMayor()} años`
    const menorEdad = document.querySelector('#menor-edad')
    menorEdad.textContent = `El miembro menor de su familia tiene ${calcularMenor()} año(s)`
    const edadPromedio = document.querySelector('#edad-promedio')
    edadPromedio.textContent = `La edad promedio de su familia es ${calcularPromedio()} años`

    document.querySelector('#reiniciar').innerHTML = `<button id="btn-reiniciar">Reiniciar</button>`

    return false

}

const btnReiniciar = document.querySelector('#reiniciar')

btnReiniciar.onclick = function () {
    document.querySelector('#cantidad-de-miembros').value = ''
    document.querySelector('#formulario-2').innerHTML = ``
    document.querySelector('#btn-calcular').className = 'oculto'
    document.querySelector('#mayor-edad').textContent = ''
    document.querySelector('#menor-edad').textContent = ''
    document.querySelector('#edad-promedio').textContent = ''
    document.querySelector('#reiniciar').innerHTML = ``

}
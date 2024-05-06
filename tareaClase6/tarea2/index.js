const btnAgregar = document.querySelector('#btn-agregar')
const btnQuitar = document.querySelector('#btn-quitar')
let cantidadDeMiembros = 0

const btnCalcular = document.querySelector('#btn-calcular')

btnAgregar.onclick = function () {
    cantidadDeMiembros++

    let label = document.createElement('label')
    label.textContent = `Salario anual miembro ${cantidadDeMiembros}:`

    let input = document.createElement('input')
    input.type = 'number'
    input.id = `salarioAnual${cantidadDeMiembros}`

    let formularioSalario = document.querySelector('#formulario-salario')
    formularioSalario.appendChild(label)
    formularioSalario.appendChild(input)
    formularioSalario.appendChild(document.createElement('br'))

    btnCalcular.className = ''
}

btnQuitar.onclick = function () {
    if (cantidadDeMiembros > 0) {

        let formularioSalario = document.querySelector('#formulario-salario')

        //Borra el ultimo salto de linea
        formularioSalario.removeChild(formularioSalario.lastElementChild)

        //borra el ultimo input
        formularioSalario.removeChild(formularioSalario.lastElementChild)

        //borra el ultimo label
        formularioSalario.removeChild(formularioSalario.lastElementChild)

        cantidadDeMiembros--

        if (cantidadDeMiembros === 0) {
            btnCalcular.className = 'oculto'
        }
    }
}

btnCalcular.onclick = function () {
    let salariosAnuales = []
    for (i = 1; i <= cantidadDeMiembros; i++) {
        if (Number(document.querySelector(`#salarioAnual${i}`).value) != '') { //PUNTO BONUS
            let salarioAnual = Number(document.querySelector(`#salarioAnual${i}`).value)
            salariosAnuales.push(salarioAnual)
        }
    }

    function calcularMayor() {
        let salarioMayor = Math.max(...salariosAnuales)
        return salarioMayor
    }

    function calcularMenor() {
        let salarioMenor = Math.min(...salariosAnuales)
        return salarioMenor
    }

    function calcularSalarioAnualPromedio() {
        let acumuladorSalariosAnuales = 0
        for (i = 0; i < salariosAnuales.length; i++) {
            acumuladorSalariosAnuales += salariosAnuales[i]
        }
        return acumuladorSalariosAnuales / salariosAnuales.length
    }

    function calcularSalarioMensualPromedio() {
        let acumuladorSalariosMensuales = 0
        for (i = 0; i < salariosAnuales.length; i++) {
            let salarioMensual = salariosAnuales[i] / 12
            acumuladorSalariosMensuales += salarioMensual
        }
        return acumuladorSalariosMensuales / salariosAnuales.length
    }

    const mayorSalario = document.querySelector('#salario-mayor')
    mayorSalario.textContent = `El mayor salario anual de la familia es: $${calcularMayor()}`
    const menorSalario = document.querySelector('#salario-menor')
    menorSalario.textContent = `El menor salario anual de la familia es: $${calcularMenor()}`
    const salarioAnualPromedio = document.querySelector('#salario-anual-promedio')
    salarioAnualPromedio.textContent = `El salario anual promedio de la familia es: $${calcularSalarioAnualPromedio()}`
    const salarioMensualPromedio = document.querySelector('#salario-mensual-promedio')
    salarioMensualPromedio.textContent = `El salario mensual promedio de la familia es: $${calcularSalarioMensualPromedio()}`


}

function probarValidarNombre() {
   console.assert(
      validarNombre('') === 'El campo nombre no debe estar vacio',
      'Validar nombre no validó que el nombre no sea vacio'
   )

   console.assert(
      validarNombre('11111111111111111111111111111111111111111111111111') === 'El campo nombre debe tener menos de 50 caracteres',
      'validar nombre no validó que el nombre tenga menos de 50 caracteres'
   )

   console.assert(
      validarNombre('123123') === 'El campo nombre solo acepta letras',
      'validarNombre no validó que el nombre solo contenga letras'
   )

   console.assert(
      validarNombre('Facundo') === '',
      'validarNombre falló con un nombre valido'
   )
}
probarValidarNombre()

function probarValidarCiudad() {
   console.assert(
      validarCiudad('') === 'Debes seleccionar una ciudad',
      'Validar ciudad no validó que se deba seleccionar una ciudad'
   )

   console.assert(
      validarCiudad('Tucuman') === '',
      'validarCiudad falló con una ciudad valida'
   )
}
probarValidarCiudad()

function probarValidarDescripcionRegalo() {
   console.assert(
      validarDescripcionRegalo('') === 'El campo regalo no puede estar vacio',
      'Validar descripción regalo no validó que el campo no sea vacio'
   )
   console.assert(
      validarDescripcionRegalo('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
      === 'El campo regalo debe tener menos de 100 caracteres',
      'Validar Descripción regalo no validó que el campo tenga menos de 100 caracteres'
   )
   console.assert(
      validarDescripcionRegalo('Computadora') === '',
      'validarDescricionRegalo falló con un regalo valido'
   )
   console.assert(
      validarDescripcionRegalo('.,.,.,') === 'El campo descripción solo puede tener numeros y letras',
      'validarDescripcionRegalo no validó que el campo solo contenga letras y numeros'
   )
}
probarValidarDescripcionRegalo()

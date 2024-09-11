// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
// Puedes usar este array para probar tu función:
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

//? SOLUCIÓN 1 (STRING)
function finderName(array, value) {
  let included = true
  let position = array.indexOf(value)
  if (array.includes(value)) {
    return `${included} ${position}`
  } else {
    return !included
  }
}

//* COMPROBACIÓN:
console.log(finderName(nameFinder, 'Jessica'))
console.log(finderName3(nameFinder, 'Mortadelo'))
// EN ESTE CASO SE DEVUELVEN LOS DATOS SOLICITADOS COMO UN STRING (no estrictamente un BOOLEAN (true/false), ni la posición del elemento buscado como un NUMBER), ni aunque los "transformes" dentro del return con un Boolean(included) o un Number(position)

//? SOLUCIÓN 2 (OBJECT)
function finderName2(array, value) {
  let included = true
  let position = array.indexOf(value)
  if (array.includes(value)) {
    return { included, position }
  } else {
    return !{ included }
  }
}

//* COMPROBACIÓN:
console.log(finderName2(nameFinder, 'Logan'))
console.log(finderName3(nameFinder, 'Mortadelo'))
// EN ESTE CASO SE DEVUELVE UN OBJECT, DEL QUE SE PUEDE EXTRAER UN BOOLEANO (true/false) + NUMBER (la posición del elemento buscado).

//? SOLUCIÓN 3 (ARRAY)
function finderName3(array, value) {
  let included = true
  let position = array.indexOf(value)
  if (array.includes(value)) {
    return [included, position]
  } else {
    return !included
  }
}

//* COMPROBACIÓN:
console.log(finderName3(nameFinder, 'Bruce'))
console.log(finderName3(nameFinder, 'Mortadelo'))
// EN ESTE CASO SE DEVUELVE UN ARRAY, DEL QUE SE PUEDE EXTRAER UN BOOLEANO (true/false) + NUMBER (la posición del elemento buscado).

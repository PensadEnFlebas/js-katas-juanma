// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
// --pista (cuando eliminamos algo de un array, su longitud se verá afectada)--
// Puedes usar este array para probar tu función:
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(array) {
  withoutDuplicates = []
  for (i = 0; i < array.length; i++) {
    newElement = array[i]

    if (!withoutDuplicates.includes(newElement)) {
      withoutDuplicates.push(newElement)
    }
  }
  return withoutDuplicates
}

//* COMPROBACIÓN:
console.log(removeDuplicates(duplicates))

// Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(array) {
  let longestWord = ''

  for (let i = 0; i < array.length; i++) {
    let arrayLength = array[i].length
    if (arrayLength > longestWord.length) {
      longestWord = array[i]
    }
  }
  return longestWord
}

//* COMPROBACIÓN:
console.log(findLongestWord(avengers))

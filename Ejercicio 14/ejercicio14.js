// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
// Puedes usar este array para probar tu función:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

function repeatCounter(array) {
  const newCounterWords = {}

  for (i = 0; i < array.length; i++) {
    let word = array[i]

    if (newCounterWords[word]) {
      newCounterWords[word]++
    } else {
      newCounterWords[word] = 1
    }
  }
  return newCounterWords
}

//* COMPROBACIÓN:
console.log(repeatCounter(counterWords))

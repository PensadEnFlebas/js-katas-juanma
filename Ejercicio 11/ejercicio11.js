// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
// Puedes usar este array para probar tu función: --pista (typeof)--
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function averageWord(array) {
  let sumArray = 0

  for (let i = 0; i < array.length; i++) {
    let stringLength = array[i]

    if (typeof stringLength === 'string') {
      sumArray += stringLength.length
    } else if (typeof stringLength === 'number') {
      sumArray += stringLength
    }
  }
  let average = sumArray / array.length
  let roundedAverage = parseFloat(average.toFixed(2))
  return roundedAverage
}

//* COMPORBACIÓN:
console.log(averageWord(mixedElements))

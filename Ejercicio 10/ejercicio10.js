// Calcular un promedio (media) es una tarea extremadamente común.
// Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6]

function average(array) {
  function sumAll(array) {
    let sumArray = 0

    for (i = 0; i < array.length; i++) {
      sumArray += array[i]
    }
    return sumArray
  }
  let average = sumAll(array) / array.length
  let roundedAverage = parseFloat(average.toFixed(2))
  return roundedAverage
}

//* COMPROBACIÓN:
console.log(average(numbers))

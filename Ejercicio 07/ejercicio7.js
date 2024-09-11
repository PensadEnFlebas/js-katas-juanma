// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else if (numberOne < numberTwo) {
    return numberTwo
  } else {
    return 'Both numbers are equal'
  }
}

//* COMPROBACIÓN:
console.log(sum(7, 5))
console.log(sum(5, 8))
console.log(sum(5, 5))

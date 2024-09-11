// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

for (i = 0; i < foodSchedule.length; i++) {
  let food = foodSchedule[i]
  let fruit = fruits[0]
  if (!food.isVegan) {
    food.name = fruit
    fruits.shift(fruit)
    food.isVegan = true
  }
}

console.log(fruits)
console.log(foodSchedule)

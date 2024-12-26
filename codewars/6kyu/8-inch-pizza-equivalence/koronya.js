// [JS][6kyu] 8 inch pizza equivalence
// 8-inch-pizza-equivalence
// https://www.codewars.com/kata/599bb194b7a047b04d000077/train/javascript

const howManyPizzas = (n) => {
  const diff = n ** 2 / 64
  const pizzas = Math.floor(diff)
  const point = diff - pizzas
  const slices = Math.round(8 * point)
  return `pizzas: ${pizzas}, slices: ${slices}`
}

howManyPizzas(16) === 'pizzas: 4, slices: 0'
howManyPizzas(12) === 'pizzas: 2, slices: 2'
howManyPizzas(8) === 'pizzas: 1, slices: 0'
howManyPizzas(6) === 'pizzas: 0, slices: 5'
howManyPizzas(0) === 'pizzas: 0, slices: 0'
howManyPizzas(9675) === 'pizzas: 1462587, slices: 7'

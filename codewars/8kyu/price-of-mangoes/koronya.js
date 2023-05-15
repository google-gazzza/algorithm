// [JS][8kyu] Price of Mangoes
// price-of-mangoes
// https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript

const mango = (quantity, price) => (quantity - Math.floor(quantity / 3)) * price

mango(2, 3) === 6
mango(3, 3) === 6
mango(4, 3) === 9
mango(5, 3) === 12
mango(9, 5) === 30

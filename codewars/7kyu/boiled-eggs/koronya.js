// [JS][7kyu] Boiled Eggs
// boiled-eggs
// https://www.codewars.com/kata/52b5247074ea613a09000164/train/javascript

const cookingTime = (eggs) => Math.ceil(eggs / 8) * 5

cookingTime(0) === 0
cookingTime(5) === 5
cookingTime(10) === 10
cookingTime(9)
cookingTime(76)
// cookingTime(12)

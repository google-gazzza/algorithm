// [JS][7kyu] How much coffee do you need?
// how-much-coffee-do-you-need
// https://www.codewars.com/kata/57de78848a8b8df8f10005b1/train/javascript

const LOWER_CASE_ARR = ['cw', 'cat', 'dog', 'movie']
const UPPER_CASE_ARR = ['CW', 'CAT', 'DOG', 'MOVIE']

const howMuchCoffee = (events) => {
  const cost = events.reduce((acc, curr) => acc + (LOWER_CASE_ARR.includes(curr) ? 1 : UPPER_CASE_ARR.includes(curr) ? 2 : 0), 0)
  return cost > 3 ? 'You need extra sleep' : cost
}

howMuchCoffee([]) === 0
howMuchCoffee(['cw']) === 1
howMuchCoffee(['CW']) === 2
howMuchCoffee(['cw', 'CAT']) === 3
howMuchCoffee(['cw', 'CAT', 'DOG']) === 'You need extra sleep'
howMuchCoffee(['cw', 'CAT', 'cw=others']) === 3

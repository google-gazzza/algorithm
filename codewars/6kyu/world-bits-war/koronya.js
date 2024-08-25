// [JS][6kyu] World Bits War
// world-bits-war
// https://www.codewars.com/kata/58865bfb41e04464240000b0/train/javascript

const getValue = (acc, number) => {
  const isPlus = number >= 0
  const value = number.toString(2).replace(/0/g, '').length
  return isPlus ? acc + value : acc - (value - 1)
}

const bitsWar = (numbers) => {
  const oddSum = numbers.filter((number) => number % 2 !== 0).reduce(getValue, 0)
  const evenSum = numbers.filter((number) => number % 2 === 0).reduce(getValue, 0)
  return oddSum > evenSum ? 'odds win' : evenSum > oddSum ? 'evens win' : 'tie'
}

// bitsWar([1, 5, 12]) === 'odds win'
// bitsWar([7, -3, 20]) === 'evens win'
// bitsWar([7, -3, -2, 6]) === 'tie'
// bitsWar([-3, -5]) === 'evens win'
// bitsWar([]) === 'tie'

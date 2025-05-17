// [JS][7kyu] Bits Battle
// bits-battle
// https://www.codewars.com/kata/58856a06760b85c4e6000055/train/javascript

const bitsBattle = (numbers) => {
  let oddsOne = 0
  let evensZero = 0
  numbers.forEach((num) => {
    const binary = num.toString(2)
    if (num === 0) {
      return
    }
    if (num % 2 === 0) {
      evensZero += binary.split('').filter((bit) => bit === '0').length
    } else {
      oddsOne += binary.split('').filter((bit) => bit === '1').length
    }
  })
  if (oddsOne > evensZero) {
    return 'odds win'
  }
  if (oddsOne < evensZero) {
    return 'evens win'
  }
  return 'tie'
}

// bitsBattle([5, 3, 14]) === 'odds win'
// bitsBattle([3, 8, 22, 15, 78]) === 'evens win'
// bitsBattle([]) === 'tie'
// bitsBattle([1, 13, 16]) === 'tie'
// bitsBattle([0]) === 'tie'
// bitsBattle([0, 1, 2]) === 'tie'

// [JS][7kyu] Count the divisors of a number
// count-the-divisors-of-a-number
// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

const getDivisorsCnt = (n) => {
  if (n === 1) {
    return 1
  }
  let count = 2
  const limit = Math.floor(n / 2)
  for (let i = 2; i <= limit; i += 1 || 0) {
    if (n % i === 0) {
      count += 1
    }
  }
  return count
}

getDivisorsCnt(1) === 1
getDivisorsCnt(10) === 4
getDivisorsCnt(11) === 2
getDivisorsCnt(54) === 8

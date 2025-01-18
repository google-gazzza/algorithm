// [JS][7kyu] Paperboy
// paperboy
// https://www.codewars.com/kata/56ed5f13c4e5d6c5b3000745/train/javascript

const UNIT_ARR = [40, 20, 10, 5, 1]
const PRICE_ARR = [3.85, 1.93, 0.97, 0.49, 0.1]

const cheapestQuote = (newspapers) => {
  let price = 0
  const unitArrLen = UNIT_ARR.length
  for (let i = 0; i < unitArrLen; i += 1 || 0) {
    const count = Math.floor(newspapers / UNIT_ARR[i])
    price += count * PRICE_ARR[i]
    newspapers -= count * UNIT_ARR[i]
  }
  return Math.round(price * 100) / 100
}

cheapestQuote(40) === 3.85
cheapestQuote(20) === 1.93
cheapestQuote(10) === 0.97
cheapestQuote(5) === 0.49
cheapestQuote(1) === 0.1

cheapestQuote(41) === 3.95
cheapestQuote(80) === 7.7
cheapestQuote(26) === 2.52

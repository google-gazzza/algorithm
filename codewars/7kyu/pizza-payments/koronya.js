// [JS][7kyu] Pizza Payments
// pizza-payments
// https://www.codewars.com/kata/5b043e3886d0752685000009/train/javascript

// const getRoundNumber = (num) => +num.toFixed(2)
const getRoundNumber = (num) => Math.round(num * 100) / 100

const michaelPays = (costs) => {
  const kate = costs < 5 ? 0 : Math.min(10, costs / 3)
  return getRoundNumber(costs - kate)
}

michaelPays(15) === 10
michaelPays(4) === 4
michaelPays(30) === 20
michaelPays(80) === 70
michaelPays(22) === 14.67
michaelPays(5.9181) === 3.95
michaelPays(28.789) === 19.19
michaelPays(4.325) === 4.33
michaelPays(4.325)

// [JS][7kyu] Formatting decimal places #1
// formatting-decimal-places-1
// https://www.codewars.com/kata/5641c3f809bf31f008000042/train/javascript

const twoDecimalPlaces = (number) => {
  const [integer, float] = String(number).split('.')
  return Number(`${integer}.${float.slice(0, 2)}`)
}

twoDecimalPlaces(10.1289767789) === 10.12
twoDecimalPlaces(-7488.83485834983) === -7488.83
twoDecimalPlaces(4.653725356) === 4.65

// [JS][7kyu] Basic Math (Add or Subtract)
// basic-math-add-or-subtract
// https://www.codewars.com/kata/5809b62808ad92e31b000031/train/javascript

const calculate = (str) => {
  const numbers = str.match(/\d+/g)
  const words = str.match(/[a-zA-Z]+/g)
  const arr = numbers.map((num, index) => {
    const number = Number(num)
    if (index === 0 || words[index - 1] === 'plus') {
      return number
    }
    return -1 * number
  })

  return String(arr.reduce((acc, curr) => acc + curr, 0))
}

calculate('1plus2plus3plus4') === '10'
calculate('1minus2minus3minus4') === '-8'
calculate('10plus20plus30minus40') === '20'

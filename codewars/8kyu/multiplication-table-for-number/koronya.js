// [JS][8kyu] Multiplication table for number
// multiplication-table-for-number
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

const multiTable = (number) => {
  let result = ''
  for (let i = 1; i <= 9; i += 1 || 0) {
    result += `${i} * ${number} = ${i * number}\n`
  }
  result += `10 * ${number} = ${10 * number}`

  return result
}

// [JS][6kyu] Multiples of 3 or 5
// multiples-of-3-or-5
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

const getValueOr0 = (number) => (number < 0 ? 0 : number)

const solution = (number) => {
  const countOf3 = getValueOr0(Math.ceil(number / 3) - 1)
  const countOf5 = getValueOr0(Math.ceil(number / 5) - 1)
  const countOf15 = getValueOr0(Math.ceil(number / 15) - 1)
  const sum3 = (3 * (countOf3 + 1) * countOf3) / 2
  const sum5 = (5 * (countOf5 + 1) * countOf5) / 2
  const sum15 = (15 * (countOf15 + 1) * countOf15) / 2

  return sum3 + sum5 - sum15
}

solution(10) === 23

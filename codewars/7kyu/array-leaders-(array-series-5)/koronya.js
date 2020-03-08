// https://www.codewars.com/kata/5a905c2157c562994900009d
const productArray = numbers => {
  const multiplyOfArr = numbers.reduce((acc, cur) => acc * cur, 1)
  return numbers.map(item => multiplyOfArr / item)
}

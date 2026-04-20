// [JS][7kyu] Show multiples of 2 numbers within a range
// show-multiples-of-2-numbers-within-a-range
// https://www.codewars.com/kata/583989556754d6f4c700018e/train/javascript

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b))
const getLcm = (a, b) => (a * b) / getGcd(a, b)

const multiples = (s1, s2, s3) => {
  const result = []
  const lcm = getLcm(s1, s2)
  for (let i = lcm; i < s3; i += lcm) {
    if (i % s1 === 0 || i % s2 === 0) {
      result.push(i)
    }
  }
  return result
}

multiples(2, 4, 40)
multiples(13, 5, 800)
multiples(13, 15, 800)

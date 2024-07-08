// [JS][7kyu] Most Likely
// most-likely
// https://www.codewars.com/kata/56644a421b7c94c622000056/train/javascript

const mostLikely = (prob1, prob2) => {
  const [a, b] = prob1.split(':').map(Number)
  const [c, d] = prob2.split(':').map(Number)
  const probA = a / b
  const probB = c / d
  return probA > probB
}

mostLikely('1:3', '1:2')

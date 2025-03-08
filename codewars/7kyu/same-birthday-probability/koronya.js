// [JS][7kyu] Same Birthday Probability
// same-birthday-probability
// https://www.codewars.com/kata/5419cf8939c5ef0d50000ef2/train/javascript

const calculateProbability = (n) => {
  let probability = 1
  for (let i = 0; i < n; i += 1) {
    probability *= (365 - i) / 365
  }
  return (1 - probability).toFixed(2)
}

calculateProbability(34)
calculateProbability(5)
calculateProbability(62)
calculateProbability(3)
calculateProbability(5) === 0.03
calculateProbability(1000) === 1

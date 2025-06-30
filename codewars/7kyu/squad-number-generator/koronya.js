// [JS][7kyu] Squad number generator
// squad-number-generator
// https://www.codewars.com/kata/5d62961d18198b000e2f22b3/train/javascript

const getCandidateNumber = (n) => {
  const result = []
  for (let i = 1; i <= 9; i += 1) {
    for (let j = 1; j <= 9; j += 1) {
      if (i + j === n) {
        result.push(`${i}${j}`)
      }
    }
  }
  return result
}

const generateNumber = (squad, n) => {
  if (!squad.includes(n)) {
    return n
  }
  const candidateList = getCandidateNumber(n)
  while (candidateList.length > 0) {
    const candidate = candidateList.shift()
    if (!squad.includes(Number(candidate))) {
      return Number(candidate)
    }
  }
  return null
}

generateNumber([1, 2, 3, 4, 6, 9, 10, 15, 69], 11) === 11
generateNumber([1, 2, 3, 4, 6, 9, 10, 11, 15, 69], 11) === 29
generateNumber([1, 2, 3, 4, 6, 9, 10, 11, 15, 29, 69], 11) === 38
generateNumber([1, 2, 3, 4, 6, 9, 10, 11, 15, 29, 38, 47, 56, 65, 69, 74, 83, 92], 11) === null

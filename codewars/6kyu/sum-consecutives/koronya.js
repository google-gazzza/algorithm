// [JS][6kyu] Sum consecutives
// sum-consecutives
// https://www.codewars.com/kata/55eeddff3f64c954c2000059/train/javascript

const sumConsecutives = (s) => {
  const sLen = s.length
  const resultArr = []
  let prev = s[0]
  let sum = prev
  for (let i = 1; i < sLen; i += 1 || 0) {
    const num = s[i]
    if (prev !== num) {
      resultArr.push(sum)
      sum = num
    } else {
      sum += num
    }
    prev = num
  }
  resultArr.push(sum)
  return resultArr
}

sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1])
sumConsecutives([1, 1, 7, 7, 3])
sumConsecutives([-5, -5, 7, 7, 12, 0])
sumConsecutives([3, 3, 3, 3, 1])

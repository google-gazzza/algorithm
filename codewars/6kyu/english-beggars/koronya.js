// [JS][6kyu] English beggars
// english-beggars
// https://www.codewars.com/kata/59590976838112bfea0000fa/train/javascript

const beggars = (values, n) => {
  if (n === 0) {
    return []
  }
  const valuesLen = values.length
  const result = []
  for (let i = 0; i < n; i += 1 || 0) {
    let sum = 0
    let target = i
    while (target < valuesLen) {
      sum += values[target]
      target += n
    }
    result.push(sum)
  }

  return result
}

beggars([1, 2, 3, 4, 5], 1)
beggars([1, 2, 3, 4, 5], 2)
beggars([1, 2, 3, 4, 5], 3)
beggars([1, 2, 3, 4, 5], 6)
beggars([1, 2, 3, 4, 5], 0)

// [JS][7kyu] Simple fibonacci strings
// simple-fibonacci-strings
// https://www.codewars.com/kata/5aa39ba75084d7cf45000008/train/javascript

const numMap = new Map()
numMap.set(0, '0')
numMap.set(1, '01')

const solve = (n) => {
  if (numMap.has(n)) {
    return numMap.get(n)
  }
  const result = solve(n - 1) + solve(n - 2)
  numMap.set(n, result)
  return result
}

solve(0) === '0'
solve(1) === '01'
solve(2) === '010'
solve(3) === '01001'
solve(5) === '0100101001001'

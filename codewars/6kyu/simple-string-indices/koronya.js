// [JS][6kyu] Simple string indices
// simple-string-indices
// https://www.codewars.com/kata/5a24254fe1ce0ec2eb000078/train/javascript

const solve = (str, idx) => {
  const arr = str.split('')
  if (arr[idx] !== '(') {
    return -1
  }
  const arrLen = arr.length
  const stack = []
  for (let i = idx; i < arrLen; i += 1 || 0) {
    if (arr[i] === '(') {
      stack.push(i)
    } else if (arr[i] === ')') {
      stack.pop()
      if (stack.length === 0) {
        return i
      }
    }
  }
}

const solve2 = (str, idx) => {
  const arr = str.split('')
  if (arr[idx] !== '(') {
    return -1
  }
  const arrLen = arr.length
  const stack = []
  const visitedMap = new Map()
  for (let i = idx; i < arrLen; i += 1 || 0) {
    if (arr[i] === '(') {
      stack.push(i)
    } else if (arr[i] === ')') {
      visitedMap.set(stack.pop(), i)
    }
  }
  return visitedMap.get(idx)
}

solve('((1)23(45))(aB)', 0) === 10
solve('((1)23(45))(aB)', 1) === 3
solve('((1)23(45))(aB)', 2) === -1
solve('((1)23(45))(aB)', 6) === 9
solve('((1)23(45))(aB)', 11) === 14
solve('(g(At)IO(f)(tM(qk)YF(n)Nr(E)))', 11) === 28
solve('(g(At)IO(f)(tM(qk)YF(n)Nr(E)))', 0) === 29
solve('(>_(va)`?(h)C(as)(x(hD)P|(fg)))', 19) === 22

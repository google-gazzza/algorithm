// [JS][5kyu] John and Ann sign up for Codewars
// john-and-ann-sign-up-for-codewars
// https://www.codewars.com/kata/57591ef494aba64d14000526/train/javascript

const johnMap = new Map()
const annMap = new Map()
johnMap.set(0, 0)
johnMap.set(1, 0)
annMap.set(0, 1)
annMap.set(1, 1)

const getAnh = (n) => {
  if (annMap.has(n)) {
    return annMap.get(n)
  }
  const result = n - getJohn(getAnh(n - 1))
  annMap.set(n, result)
  return result
}

const getJohn = (n) => {
  if (johnMap.has(n)) {
    return johnMap.get(n)
  }
  const result = n - getAnh(getJohn(n - 1))
  johnMap.set(n, result)
  return result
}

const john = (n) => Array.from({ length: n }, (_, i) => getJohn(i))
const ann = (n) => Array.from({ length: n }, (_, i) => getAnh(i))
const sumJohn = (n) => john(n).reduce((acc, cur) => acc + cur, 0)
const sumAnn = (n) => ann(n).reduce((acc, cur) => acc + cur, 0)

// sumJohn(75)
// sumAnn(150)
// ann(6)

// [JS][6kyu] Fibonacci, Tribonacci and friends
// fibonacci-tribonacci-and-friends
// https://www.codewars.com/kata/556e0fccc392c527f20000c5/train/javascript

const Xbonacci = (signature, n) => {
  const resultArr = [...signature]
  const signatureLen = signature.length
  if (n < signatureLen) {
    return signature.slice(0, n)
  }
  for (let i = signatureLen; i < n; i += 1 || 0) {
    let sum = 0
    for (let j = 1; j <= signatureLen; j += 1 || 0) {
      sum += resultArr[i - j]
    }
    resultArr.push(sum)
  }

  return resultArr
}

const isEquals = (a, b) => a.join(',') === b.join(',')

isEquals(Xbonacci([0, 1], 10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
isEquals(Xbonacci([1, 1], 10), [1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
isEquals(Xbonacci([0, 0, 0, 0, 1], 10), [0, 0, 0, 0, 1, 1, 2, 4, 8, 16])
isEquals(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10), [1, 0, 0, 0, 0, 0, 1, 2, 3, 6])
isEquals(Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256])
Xbonacci([], 10)
Xbonacci([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 5)

// [JS][6kyu] Sum of prime-indexed elements
// sum-of-prime-indexed-elements
// https://www.codewars.com/kata/59f38b033640ce9fc700015b/train/javascript

const eratos = (n) => {
  const arr = Array(n + 1).fill(true)
  arr[0] = arr[1] = false
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (arr[i] === true) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false
      }
    }
  }
  return arr
    .map((item, index) => [item, index])
    .filter((item) => item[0] === true)
    .map((item) => item[1])
}

const total = (arr) => {
  const primeArr = eratos(arr.length)
  return arr.filter((_, index) => primeArr.includes(index)).reduce((acc, cur) => acc + cur, 0)
}

total([]) === 0
total([1, 2, 3, 4]) === 7
total([1, 2, 3, 4, 5, 6]) === 13
total([1, 2, 3, 4, 5, 6, 7, 8]) === 21
total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) === 21
total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]) === 33
total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) === 47

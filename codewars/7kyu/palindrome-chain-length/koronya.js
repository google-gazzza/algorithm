// [JS][7kyu] Palindrome chain length
// palindrome-chain-length
// https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/javascript

const isPalindromeNum = (num) => Number(String(num).split('').reverse().join('')) === num

const getNextNum = (num) => {
  const numArr = String(num).split('')
  const a = Number(numArr.join(''))
  const b = Number(numArr.reverse().join(''))

  return a + b
}

const palindromeChainLength = (n) => {
  let target = n
  let count = 0
  while (isPalindromeNum(target) === false) {
    target = getNextNum(target)
    count += 1
  }

  return count
}

palindromeChainLength(1) === 0
palindromeChainLength(88) === 0
palindromeChainLength(87) === 4
palindromeChainLength(89) === 24
palindromeChainLength(10) === 1

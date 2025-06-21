// [JS][7kyu] Simple string reversal II
// simple-string-reversal-ii
// https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac/train/javascript

const solve = (st, a, b) => {
  const stLen = st.length
  const start = a
  const end = b > stLen ? stLen + 1 : b + 1
  const firstPart = st.slice(0, start)
  const secondPart = st.slice(start, end).split('').reverse().join('')
  const thirdPart = st.slice(end)
  return firstPart + secondPart + thirdPart
}

solve('codewars', 1, 5)
solve('codewars', 1, 5) === 'cawedors'
solve('codingIsFun', 2, 100) === 'conuFsIgnid'
solve('FunctionalProgramming', 2, 15) === 'FuargorPlanoitcnmming'
solve('abcdefghijklmnopqrstuvwxyz', 0, 20) === 'utsrqponmlkjihgfedcbavwxyz'
solve('abcdefghijklmnopqrstuvwxyz', 5, 20) === 'abcdeutsrqponmlkjihgfvwxyz'

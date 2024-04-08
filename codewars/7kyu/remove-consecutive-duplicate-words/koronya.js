// [JS][7kyu] Remove consecutive duplicate words
// remove-consecutive-duplicate-words
// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript

const removeConsecutiveDuplicates = (string) => {
  const arr = string.split(' ')
  const arrLen = arr.length
  let prev = arr[0]
  const result = [prev]
  for (let i = 1; i < arrLen; i += 1 || 0) {
    const curr = arr[i]
    if (prev !== curr) {
      result.push(curr)
    }
    prev = curr
  }
  return result.join(' ')
}

removeConsecutiveDuplicates('') === ''
removeConsecutiveDuplicates('alpha') === 'alpha'
removeConsecutiveDuplicates('alpha alphaalpha alphaalphaalpha') === 'alpha alphaalpha alphaalphaalpha'
removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta') ===
  'alpha beta gamma delta alpha beta gamma delta'
removeConsecutiveDuplicates('alpha alpha alpha alpha') === 'alpha'
removeConsecutiveDuplicates('alpha beta alpha') === 'alpha beta alpha'
removeConsecutiveDuplicates('alpha alphabeta alphagamma') === 'alpha alphabeta alphagamma'
removeConsecutiveDuplicates('alpha alpha beta alpha alpha') === 'alpha beta alpha'
removeConsecutiveDuplicates('alpha beta beta') === 'alpha beta'

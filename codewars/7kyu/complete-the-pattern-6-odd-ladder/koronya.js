// [JS][7kyu] Complete The Pattern #6 - Odd Ladder
// complete-the-pattern-6-odd-ladder
// https://www.codewars.com/kata/5574940eae1cf7d520000076/train/javascript

const pattern = (n) => {
  if (n <= 0) {
    return ''
  }
  const limit = Math.ceil(n / 2)
  return Array.from({ length: limit }, (_, i) => i * 2 + 1)
    .map((num) => String(num).repeat(num))
    .join('\n')
}

pattern(4) === '1\n333'
pattern(1) === '1'
pattern(5) === '1\n333\n55555'
pattern(0) === ''
pattern(-25) === ''

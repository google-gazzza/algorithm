// [JS][6kyu] Roman Numerals Decoder
// roman-numerals-decoder
// https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

const numMap = new Map()
numMap.set('I', 1)
numMap.set('V', 5)
numMap.set('X', 10)
numMap.set('L', 50)
numMap.set('C', 100)
numMap.set('D', 500)
numMap.set('M', 1000)
numMap.set('IV', 4)
numMap.set('IX', 9)
numMap.set('XL', 40)
numMap.set('XC', 90)
numMap.set('CD', 400)
numMap.set('CM', 900)

const solution = (roman) => {
  const romanLen = roman.length
  let sum = 0
  let index = 0
  while (index < romanLen) {
    if (index !== romanLen - 1) {
      const cur = roman[index]
      const next = roman[index + 1]
      if (numMap.has(cur + next)) {
        sum += numMap.get(cur + next)
        index += 2
        continue
      }
    }
    sum += numMap.get(roman[index])
    index += 1
  }

  return sum
}

solution('XXI') === 21
solution('I') === 1
solution('IV') === 4
solution('MMVIII') === 2008
solution('MDCLXVI') === 1666

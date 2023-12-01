// [JS][5kyu] First non-repeating character
// first-non-repeating-character
// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

const firstNonRepeatingLetter = (s) => {
  if (s.length === 0) {
    return ''
  }
  const sArr = s.split('')
  const sMap = new Map()
  sArr.forEach((item) => {
    const lowerItem = item.toLowerCase()
    sMap.set(lowerItem, (sMap.get(lowerItem) || 0) + 1)
  })
  const findItem = sArr.find((item) => sMap.get(item.toLowerCase()) === 1)

  return findItem ? findItem[0] : ''
}

firstNonRepeatingLetter('a') === 'a'
firstNonRepeatingLetter('stress') === 't'
firstNonRepeatingLetter('moonmen') === 'e'
firstNonRepeatingLetter('sTreSS') === 'T'
firstNonRepeatingLetter('') === ''
firstNonRepeatingLetter('aaaaa') === ''

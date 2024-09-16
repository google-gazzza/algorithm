// [JS][7kyu] The First Non Repeated Character In A String
// the-first-non-repeated-character-in-a-string
// https://www.codewars.com/kata/570f6436b29c708a32000826/train/javascript

const firstNonRepeated = (s) => {
  const strMap = new Map()
  const sArr = s.split('')
  sArr.forEach((str) => strMap.set(str, (strMap.get(str) || 0) + 1))
  for (const str of sArr) {
    if (strMap.get(str) === 1) {
      return str
    }
  }

  return null
}

firstNonRepeated('test') === 'e'
firstNonRepeated('teeter') === 'r'
firstNonRepeated('1122321235121222') === '5'
firstNonRepeated('rend') === 'r'

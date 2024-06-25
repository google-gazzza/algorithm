// [JS][6kyu] Only Duplicates
// only-duplicates
// https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/python

const onlyDuplicates = (str) => {
  const charMap = new Map()
  const strArr = str.split('')
  strArr.forEach((char) => {
    charMap.set(char, (charMap.get(char) || 0) + 1)
  })

  return strArr.filter((char) => charMap.get(char) > 1).join('')
}

onlyDuplicates('abccdefee') === 'cceee'
onlyDuplicates('hello') === 'll'
onlyDuplicates('colloquial') === 'ollol'
onlyDuplicates('foundersandcoders') === 'ondersndoders'

// [JS][6kyu] Duplicate Encoder
// duplicate-encoder
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

const duplicateEncode = (word) => {
  const map = new Map()
  for (const str of word) {
    const adjustStr = str.toLowerCase()
    map.set(adjustStr, (map.get(adjustStr) || 0) + 1)
  }
  const duplicateSet = new Set([...map].filter(([_, count]) => count > 1).map((item) => item[0]))

  return word
    .split('')
    .map((item) => (duplicateSet.has(item.toLowerCase()) ? ')' : '('))
    .join('')
}

duplicateEncode('din')
duplicateEncode('recede')
duplicateEncode('(( @')
duplicateEncode('Success')

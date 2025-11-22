// [JS][6kyu] Is it an isogram?
// is-it-an-isogram
// https://www.codewars.com/kata/586d79182e8d9cfaba0000f1/train/javascript

const isIsogram = (str) => {
  if (typeof str !== 'string') {
    return false
  }
  const cleanedStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase()
  if (cleanedStr.length === 0) {
    return false
  }
  const charMap = new Map()
  for (const char of cleanedStr) {
    charMap.set(char, charMap.get(char) + 1 || 1)
  }
  const arr = [...charMap.values()]
  const someCount = arr[0]

  return arr.every((count) => count === someCount)
}

isIsogram(null) === false
isIsogram(3) === false
isIsogram('Dermatoglyphics') === true
isIsogram('isogram') === true
isIsogram('eleven') === false
isIsogram('moOse') === false
isIsogram('isIsogram') === false
isIsogram('') === false
isIsogram('-.-') === false
isIsogram('isogram') === true
isIsogram('subdermatoglyphic') === true
isIsogram('Alphabet') === false
isIsogram('thumbscrew-japingly') === true
isIsogram('Hjelmqvist-Gryb-Zock-Pfund-Wax') === true
isIsogram('Emily Jung Schwartzkopf') === true
isIsogram('aabbccddeeffgg') === true

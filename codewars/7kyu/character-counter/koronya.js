// [JS][7kyu] Character Counter
// character-counter
// https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript

const validateWord = (s) => {
  const itemMap = new Map()
  s.split('')
    .map((item) => item.toLowerCase())
    .forEach((item) => {
      itemMap.set(item, itemMap.has(item) ? itemMap.get(item) + 1 : 1)
    })
  return [...itemMap.values()].every((item, index, arr) => item === arr[0])
}

validateWord('abcabc') === true
validateWord('Abcabc') === true
validateWord('abc123') === true
validateWord('abcabcd') === false
validateWord('abc!abc!') === true
validateWord('abc:abc') === false

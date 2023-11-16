// [JS][7kyu] Ordered Count of Characters
// ordered-count-of-characters
// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript

const orderedCount = (text) => {
  const textMap = new Map()
  text.split('').forEach((str) => {
    textMap.set(str, (textMap.get(str) || 0) + 1)
  })
  return [...textMap]
}

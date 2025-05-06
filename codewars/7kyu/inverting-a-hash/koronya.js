// [JS][7kyu] Inverting a Hash
// inverting-a-hash
// https://www.codewars.com/kata/5b5604e26dc79e6832000101/train/javascript

const invertHash = (hash) => {
  const result = {}
  Object.entries(hash).forEach(([key, value]) => {
    result[value] = key
  })
  return result
}

invertHash({ a: 1, b: 2, c: 3 })

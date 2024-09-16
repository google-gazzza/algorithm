// [JS][5kyu] Lazy Repeater
// lazy-repeater
// https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3/train/javascript

function makeLooper(str) {
  const strLen = str.length
  let index = 0
  return () => {
    const result = str[index]
    index = (index + 1) % strLen
    return result
  }
}

const abc = makeLooper('abc')
abc()
abc()
abc()
abc()

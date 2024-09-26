// [JS][7kyu] Anagram Detection
// anagram-detection
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

const isAnagram = (test, original) => {
  const testLen = test.length
  const originalLen = original.length
  if (testLen !== originalLen) {
    return false
  }

  const strMap = new Map()
  for (const str of test) {
    const lowerStr = str.toLowerCase()
    strMap.set(lowerStr, (strMap.get(lowerStr) || 0) + 1)
  }
  for (const str of original) {
    const lowerStr = str.toLowerCase()
    if (strMap.has(lowerStr) === false) {
      return false
    }
    const count = strMap.get(lowerStr) - 1
    if (count === 0) {
      strMap.delete(lowerStr)
    } else {
      strMap.set(lowerStr, count)
    }
  }

  return strMap.size === 0
}

isAnagram('foefet', 'toffee') === true
isAnagram('Buckethead', 'DeathCubeK') === true
isAnagram('Twoo', 'WooT') === true

isAnagram('dumble', 'bumble') === false
isAnagram('ound', 'round') === false
isAnagram('apple', 'pale') === false

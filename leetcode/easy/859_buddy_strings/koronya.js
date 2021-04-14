// [Easy] 859. Buddy Strings
// 859_buddy_strings

// https://leetcode.com/problems/buddy-strings
// Runtime: 72 ms, faster than 99.69% of JavaScript online submissions for Buddy Strings.
// Memory Usage: 40.2 MB, less than 63.98% of JavaScript online submissions for Buddy Strings.

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
const buddyStrings = function (a, b) {
  if (a.length !== b.length) {
    return false
  }
  const strLen = a.length
  if (a === b) {
    const strSet = new Set()
    for (let i = 0; i < strLen; i += 1 || 0) {
      const str = a[i]
      if (str === b[i]) {
        if (strSet.has(str) === false) {
          strSet.add(str)
        } else {
          return true
        }
      }
    }
    return false
  }

  let diff = 0
  const diffArr = []
  for (let i = 0; i < strLen; i += 1 || 0) {
    if (a[i] !== b[i]) {
      diff += 1
      diffArr.push(i)
    }
    if (diff > 2) {
      return false
    }
  }
  const diffArrLen = diffArr.length
  if (diffArrLen === 0) {
    return false
  } else if (diffArrLen === 1) {
    return false
  }

  const [first, second] = diffArr
  return a[first] === b[second] && a[second] === b[first]
}

// true
buddyStrings('ab', 'ba') //?
buddyStrings('aa', 'aa') //?
buddyStrings('aaaaaaabc', 'aaaaaaacb') //?
buddyStrings('abab', 'abab') //?

// false
buddyStrings('ab', 'ab') //?

buddyStrings('aab', 'aac') //?
buddyStrings('abba', 'abab') //?
buddyStrings('aabb', 'bbaa') //?
buddyStrings('ab', 'babbb') //?

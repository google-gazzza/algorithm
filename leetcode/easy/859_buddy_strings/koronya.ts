// [Easy] 859. Buddy Strings
// 859_buddy_strings

// https://leetcode.com/problems/buddy-strings
// Runtime: 84 ms, faster than 93.33% of TypeScript online submissions for Buddy Strings.
// Memory Usage: 41.5 MB, less than 53.33% of TypeScript online submissions for Buddy Strings.

function buddyStrings(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false
  }
  const strLen: number = a.length
  if (a === b) {
    const strSet = new Set<string>()
    for (let i: number = 0; i < strLen; i += 1) {
      const str: string = a[i]
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

  let diff: number = 0
  const diffArr: number[] = []
  for (let i: number = 0; i < strLen; i += 1) {
    if (a[i] !== b[i]) {
      diff += 1
      diffArr.push(i)
    }
    if (diff > 2) {
      return false
    }
  }
  const diffArrLen: number = diffArr.length
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

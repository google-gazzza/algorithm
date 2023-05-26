// [Easy] 2287. Rearrange Characters to Make Target String
// 2287_rearrange_characters_to_make_target_string

// https://leetcode.com/problems/rearrange-characters-to-make-target-string
// Runtime: 78 ms, faster than 86.96% of TypeScript online submissions for Rearrange Characters to Make Target String.
// Memory Usage: 45.3 MB, less than 26.09% of TypeScript online submissions for Rearrange Characters to Make Target String.

function rearrangeCharacters(s: string, target: string): number {
  const targetMap = new Map<string, number>()
  const targetArr = target.split('')
  targetArr.forEach((item) => targetMap.set(item, (targetMap.get(item) || 0) + 1))
  const sMap = new Map<string, number>()
  let result = 0
  for (const char of s) {
    if (targetMap.has(char) === true) {
      sMap.set(char, (sMap.get(char) || 0) + 1)
    }
  }

  while (true) {
    for (const [key, value] of targetMap) {
      if (sMap.has(key) === false) {
        return result
      }
      const sVal = sMap.get(key)
      if (sVal < value) {
        return result
      }
      sMap.set(key, sVal - value)
    }
    result += 1
  }
}


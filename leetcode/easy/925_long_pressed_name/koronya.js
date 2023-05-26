// [Easy] 925. Long Pressed Name
// 925_long_pressed_name

// https://leetcode.com/problems/long-pressed-name
// Runtime: 68 ms, faster than 94.12% of JavaScript online submissions for Long Pressed Name.
// Memory Usage: 36.9 MB, less than 53.84% of JavaScript online submissions for Long Pressed Name.
const isLongPressedName = (name, typed) => {
  if (name[0] !== typed[0]) {
    return false
  }
  const nameLen = name.length
  const typedLen = typed.length
  let nameIndex = 1
  let typedIndex = 1

  while (nameIndex < nameLen || typedIndex < typedLen) {
    const typedValue = typed[typedIndex]
    if (typedValue === name[nameIndex]) {
      nameIndex += 1
      typedIndex += 1
    } else if (typedValue === name[nameIndex - 1]) {
      typedIndex += 1
    } else {
      return false
    }
  }

  return true
}

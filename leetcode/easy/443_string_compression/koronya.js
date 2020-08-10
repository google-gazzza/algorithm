// [Easy] 443. String Compression
// 443_string_compression

// https://leetcode.com/problems/string-compression
// Runtime: 72 ms, faster than 95.70% of JavaScript online submissions for String Compression.
// Memory Usage: 38.5 MB, less than 65.59% of JavaScript online submissions for String Compression.
const compress = chars => {
  const charsLen = chars.length
  let duplicateLen = 1
  let startIndex = 0
  for (let i = 0; i < charsLen; i = i + 1 | 0) {
    if (chars[i] === chars[i + 1]) {
      duplicateLen += 1
    } else {
      if (duplicateLen === 1) {
        startIndex += 1
      } else {
        const duplicateStrArr = [...duplicateLen.toString()]
        const removedStringLen = duplicateLen - 1 - duplicateStrArr.length 
        chars.splice(startIndex + 1, duplicateLen - 1, ...duplicateStrArr)
        startIndex = i + 1 - removedStringLen
        i -= removedStringLen
        duplicateLen = 1
      }
    }
  }

  return chars.length
}

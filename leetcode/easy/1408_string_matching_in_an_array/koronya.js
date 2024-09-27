// [Easy] 1408. String Matching in an Array
// 1408_string_matching_in_an_array

// https://leetcode.com/problems/string-matching-in-an-array
// Runtime: 84 ms, faster than 67.39% of JavaScript online submissions for String Matching in an Array.
// Memory Usage: 38.9 MB, less than 46.74% of JavaScript online submissions for String Matching in an Array.
const isSubset = (arr, str) => {
  const containCount = arr.reduce((acc, cur) => cur.includes(str) ? acc + 1 : acc, 0)
  return containCount > 1
}

const stringMatching = words => {
  const resultArr = []
  words.forEach(word => {
    if (isSubset(words, word)) {
      resultArr.push(word)
    }
  })

  return resultArr
}

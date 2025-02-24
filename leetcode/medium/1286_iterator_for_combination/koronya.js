// [Medium] 1286. Iterator for Combination
// 1286_iterator_for_combination

// https://leetcode.com/problems/iterator-for-combination
// Runtime: 112 ms, faster than 61.00% of JavaScript online submissions for Iterator for Combination.
// Memory Usage: 42.7 MB, less than 63.18% of JavaScript online submissions for Iterator for Combination.
const CombinationIterator = function(characters, combinationLength) {
  const charactersLen = characters.length
  this.resultArr = []
  const backtracking = (start, accStr = '') => {
    const accStrLen = accStr.length
    if (accStrLen === combinationLength) {
      this.resultArr.push(accStr)
    } else {
      for (let i = start + 1; i < charactersLen; i = i + 1 | 0) {
        backtracking(i, accStr + characters[i])
      }
    }
  }
  for (let i = 0; i < charactersLen; i = i + 1 | 0) {
    backtracking(i, characters[i])
  }

  this.resultArrLen = this.resultArr.length
  this.resultIndex = 0
}

CombinationIterator.prototype.next = function() {
  const result = this.resultArr[this.resultIndex]
  this.resultIndex += 1
  return result
}

CombinationIterator.prototype.hasNext = function() {
  return this.resultArrLen > this.resultIndex
}

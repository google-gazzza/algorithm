// [Medium] 1268. Search Suggestions System
// 1268_search_suggestions_system

// https://leetcode.com/problems/search-suggestions-system/
// Runtime: 92 ms, faster than 100.00% of JavaScript online submissions for Search Suggestions System.
// Memory Usage: 48.7 MB, less than 65.41% of JavaScript online submissions for Search Suggestions System.
const suggestedProducts = (products, searchWord) => {
  products.sort()
  const resultArr = []
  const productsLen = products.length
  const searchWordLen = searchWord.length
  let accStr = ''
  let lastIndex = -1
  let candidateArr = []
  for (let i = 0; i < searchWordLen; i = i + 1 | 0) {
    const str = searchWord[i]
    accStr += str
    const searchArr = []
    const newCandidateArr = []
    candidateArr.forEach(item => {
      if (item.startsWith(accStr)) {
        searchArr.push(item)
        newCandidateArr.push(item)
      }
    })
    candidateArr = newCandidateArr

    for (let j = lastIndex + 1; j < productsLen; j = j + 1 | 0) {
      if (candidateArr.length === 3) {
        break
      }
      const targetStr = products[j]
      if (targetStr.startsWith(accStr)) {
        searchArr.push(targetStr)
        candidateArr.push(targetStr)
      }
      lastIndex += 1
      
    }
    resultArr.push(searchArr)
  }

  return resultArr
}

// Runtime: 136 ms, faster than 78.49% of JavaScript online submissions for Search Suggestions System.
// Memory Usage: 48.4 MB, less than 77.33% of JavaScript online submissions for Search Suggestions System.
const suggestedProducts2 = (products, searchWord) => {
  products.sort()
  const resultArr = []
  const productsLen = products.length
  const searchWordLen = searchWord.length
  let accStr = ''
  for (let i = 0; i < searchWordLen; i = i + 1 | 0) {
    const str = searchWord[i]
    accStr += str
    let count = 0
    const searchArr = []
    for (let j = 0; j < productsLen; j = j + 1 | 0) {
      const targetStr = products[j]
      if (targetStr.startsWith(accStr)) {
        searchArr.push(targetStr)
        count += 1
      }
      if (count === 3) {
        break
      }
    }
    resultArr.push(searchArr)
  }

  return resultArr
}

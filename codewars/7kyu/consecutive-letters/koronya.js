// [JS][7kyu] Consecutive letters
// consecutive-letters
// https://www.codewars.com/kata/5ce6728c939bf80029988b57/train/javascript

const solve = (s) => {
    const sArr = s.split('')
    const uniqueArr = [...new Set(sArr)]
    if (sArr.length !== uniqueArr.length) {
      return false
    }
    const sorted = sArr.sort()
    const sortedLen = sorted.length
    const firstCharCode = sorted[0].charCodeAt(0)
    const lastCharCode = sorted[sortedLen - 1].charCodeAt(0)
    return lastCharCode - firstCharCode + 1 === sortedLen
  }
  
  // solve('abc') === true
  // solve('abd') === false
  // solve('dabc') === true
  // solve('abbc') === false
  // solve('yzinoggdgyvcjizmyahclibobv') === false
  // solve('tavsxkzoqfniafnqvvrkvxihjv') === false
  
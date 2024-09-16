// [Medium] 932. Beautiful Array
// 932_beautiful_array

// https://leetcode.com/problems/beautiful-array
// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions for Beautiful Array.
// Memory Usage: 40.6 MB, less than 40.00% of JavaScript online submissions for Beautiful Array.
// solution1 - with memoization
const beautifulArray = function (N) {
  const numMap = new Map()
  numMap.set(1, [1])
  const getArr = (n) => {
    if (numMap.has(n)) {
      return numMap.get(n)
    }
    const odds = getArr(Math.floor((n + 1) / 2)).map((item) => item * 2 - 1)
    const evens = getArr(Math.floor(n / 2)).map((item) => item * 2)
    const returnArr = [...odds, ...evens]
    numMap.set(n, returnArr)
    return returnArr
  }

  return getArr(N)
}

// Runtime: 96 ms, faster than 10.00% of JavaScript online submissions for Beautiful Array.
// Memory Usage: 43.4 MB, less than 20.00% of JavaScript online submissions for Beautiful Array.
// solution 2 - without memoization
const beautifulArray2 = function (N) {
  const getArr = (n) => {
    if (n === 1) {
      return [1]
    }
    const odds = getArr(Math.floor((n + 1) / 2)).map((item) => item * 2 - 1)
    const evens = getArr(Math.floor(n / 2)).map((item) => item * 2)
    return [...odds, ...evens]
  }

  return getArr(N)
}

const isValidArr = (arr) => {
  const arrLen = arr.length
  const item = arr[arrLen - 1]
  for (let i = 0; i < arrLen - 2; i += 1 || 0) {
    const sum = item + arr[i]
    for (let j = i + 1; j < arrLen - 1; j += 1 || 0) {
      if (sum === arr[j] * 2) {
        return false
      }
    }
  }
  return true
}

// solution3 - 처음했던 풀이 - TimeLimitExceeded...
const beautifulArray3 = function (N) {
  let resultArr = []

  const dfs = (arr, restArr) => {
    if (resultArr.length !== 0) {
      return
    }
    const arrLen = arr.length
    const restArrLen = restArr.length
    const validArrFlag = isValidArr(arr)
    if (arrLen === N && validArrFlag) {
      resultArr = arr
      return
    } else {
      if ((arrLen >= 3 && validArrFlag) || arrLen < 3) {
        for (let i = 0; i < restArrLen; i += 1 || 0) {
          const clonedArr = [...restArr]
          dfs([...arr, ...clonedArr.splice(i, 1)], clonedArr)
        }
      }
    }
  }
  const NArr = Array.from({ length: N }).map((_, i) => i + 1)
  for (let i = 0; i < N; i += 1 || 0) {
    const arr = [...NArr]
    dfs(arr.splice(i, 1), arr)
  }

  return resultArr
}

// beautifulArray(4) //?
// beautifulArray(5) //?
// beautifulArray(10) //?
// beautifulArray(20) //?

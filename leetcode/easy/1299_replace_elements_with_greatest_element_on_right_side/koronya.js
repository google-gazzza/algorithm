
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side

// 드디어, runtime 대폭 상승!
// Runtime: 72 ms, faster than 95.71% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// Memory Usage: 37.9 MB, less than 100.00% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
const replaceElements = arr => {
  const arrLen = arr.length
  const resultArr = new Array(arrLen)
  arr.reduceRight((prevMax, item, index) => {
    if (index === 0) {
      return
    }
    const max = Math.max(prevMax, item)
    resultArr[index - 1] = max
    return max
  }, -1)
  resultArr[arrLen - 1] = -1
  
  return resultArr
}

// replaceElements3 방법에서 extArr의 크기를 줄여, 보다 효과적으로 돌기를 기대했으나 별 차이 없음 -_-;
// Runtime: 120 ms, faster than 41.81% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// Memory Usage: 42.6 MB, less than 100.00% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
const replaceElements2 = arr => {
  const extArr = arr.map((value, index) => ({value, index}))
  let extArrLen = extArr.length
  extArr.sort((a, b) => b.value - a.value)
  const resultArr =  []
  arr.map((_, arrIndex) => {
    while (extArrLen > 0) {
      const {index, value} = extArr[0]
      if (arrIndex < index) {
        resultArr.push(value)
        break
      } else {
        extArr.splice(0, 1)
        extArrLen -= 1
      }
    }
  })
  resultArr.push(-1)
  return resultArr
}

// index값을 가진 sortArr를 하나 만들어서 그것을 이용하는 방법
// Runtime: 128 ms, faster than 40.22% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// Memory Usage: 42.5 MB, less than 100.00% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
const replaceElements3 = arr => {
  const extArr = arr.map((value, index) => ({value, index}))
  extArr.sort((a, b) => b.value - a.value)
  const resultArr =  []
  arr.map((_, arrIndex) => {
    const findObject = extArr.find(({index}) => {
      return arrIndex < index
    })
    resultArr.push(findObject ? findObject.value : -1)
  })
  return resultArr
}

// 코드는 짧지만 느림! 단순 무식하게 풀이한 방법! 이렇게 하면 얼마나 느린가 보자!
// Runtime: 632 ms, faster than 12.72% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// Memory Usage: 51.4 MB, less than 100.00% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
const replaceElements4 = arr => {
  const arrLen = arr.length
  const resultArr = []
  for (let i = 1; i < arrLen; i += 1) {
    resultArr.push(Math.max(...arr.slice(i, arrLen)))
  }
  resultArr.push(-1)
  return resultArr
}



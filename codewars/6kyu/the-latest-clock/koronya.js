// [JS][6kyu] The latest clock
// the-latest-clock
// https://www.codewars.com/kata/58925dcb71f43f30cd00005f/train/javascript

const isValid = (arr) => {
  const [a, b, c, d] = arr
  return (a === 2 && b < 4 && c < 6 && d < 10) || (a < 2 && b < 10 && c < 6 && d < 10)
}

const getValue = (arr) => {
  const [a, b, c, d] = arr
  return a * 1000 + b * 100 + c * 10 + d
}

const latestClock = (a, b, c, d) => {
  const arr = [a, b, c, d]
  let max = 0
  const arrLen = arr.length
  const dfs = (arr1, arr2) => {
    if (arr1.length === 4) {
      if (isValid(arr1)) {
        max = Math.max(max, getValue(arr1))
      }
      return
    }
    const arr2Len = arr2.length
    for (let i = 0; i < arr2Len; i += 1 || 0) {
      const newArr2 = [...arr2]
      newArr2.splice(i, 1)
      dfs([...arr1, arr2[i]], newArr2)
    }
  }
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const newArr = [...arr]
    newArr.splice(i, 1)
    dfs([arr[i]], newArr)
  }

  if (max === 0) {
    return '00:00'
  }
  const resultString = String(max)
  if (max < 1000) {
    return `0${resultString[0]}:${resultString[1]}${resultString[2]}`
  }
  return resultString === '0' ? '00:00' : `${resultString[0]}${resultString[1]}:${resultString[2]}${resultString[3]}`
}

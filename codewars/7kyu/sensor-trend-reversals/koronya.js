// [JS][7kyu] Sensor Trend Reversals
// sensor-trend-reversals
// https://www.codewars.com/kata/6a6bdaca77f722e42da8fba6/train/javascript

const removeDuplicateContinuousArr = (arr) => {
  const arrLen = arr.length
  if (arrLen < 2) {
    return arr
  }
  let prev = arr[0]
  const result = [prev]
  for (let i = 1; i < arrLen; i += 1) {
    const now = arr[i]
    if (now !== prev) {
      result.push(now)
    }
    prev = now
  }
  return result
}

const countDirectionChanges = (readings) => {
  const modifyArr = removeDuplicateContinuousArr(readings)
  const modifyArrLen = modifyArr.length
  if (modifyArrLen < 2) {
    return 0
  }

  let count = 0
  let isIncreasing = modifyArr[0] < modifyArr[1]
  let prev = modifyArr[1]
  for (let i = 2; i < modifyArrLen; i += 1) {
    const now = modifyArr[i]
    if (isIncreasing) {
      if (now < prev) {
        count += 1
      }
    } else {
      if (now > prev) {
        count += 1
      }
    }
    isIncreasing = prev < now
    prev = now
  }

  return count
}

// countDirectionChanges([1, 3, 2, 4])
// countDirectionChanges([1, 3, 2, 4]) === 2
// countDirectionChanges([5, 3, 1]) === 0
// countDirectionChanges([1, 1, 3, 3, 2]) === 1
// countDirectionChanges([4, 4, 4]) === 0
// countDirectionChanges([]) === 0

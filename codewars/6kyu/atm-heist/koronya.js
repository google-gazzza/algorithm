// [JS][6kyu] ATM Heist
// atm-heist
// https://www.codewars.com/kata/5d8108a41e94580023bd6419/train/javascript

const maximumThrill = (arr) => {
  const arrLen = arr.length
  if (arrLen === 0) {
    return 0
  }

  let maxVal = arr[0]
  for (let i = 1; i < arrLen; i += 1) {
    if (arr[i] > maxVal) {
      maxVal = arr[i]
    }
  }
  let max = maxVal * 2
  let bestLeft = arr[0] - 0
  for (let i = 1; i < arrLen; i += 1) {
    const candidate = bestLeft + arr[i] + i
    if (candidate > max) {
      max = candidate
    }

    const value = arr[i] - i
    if (value > bestLeft) {
      bestLeft = value
    }
  }

  return max
}

maximumThrill([]) === 0
maximumThrill([0]) === 0
maximumThrill([3, 1, 3]) === 8
maximumThrill([3, 1, 6]) === 12
maximumThrill([2, 3, 4, 5]) === 10
maximumThrill([10, 10, 11, 13, 7, 8, 9]) === 26
maximumThrill([2, 3, 4, 5, 10, 6, 7, 8, 9, 10, 11, 12, 4, 4, 2, 2, 12, 8]) === 34

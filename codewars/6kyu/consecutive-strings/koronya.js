// [JS][6kyu] Consecutive strings
// consecutive-strings
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

const longestConsec = (strarr, k) => {
  const strarrLen = strarr.length
  if (strarrLen === 0 || k > strarrLen || k <= 0) {
    return ''
  }

  let windowSum = 0
  const slideWindow = []
  for (let i = 0; i < k; i += 1 || 0) {
    const len = strarr[i].length
    slideWindow.push(len)
    windowSum += len
  }
  let max = windowSum
  const limit = strarrLen - k + 1
  let targetIndex = 0

  for (let i = 1; i < limit; i += 1 || 0) {
    windowSum -= slideWindow.shift()
    const num = strarr[i + k - 1].length
    slideWindow.push(num)
    windowSum += num
    if (windowSum > max) {
      max = windowSum
      targetIndex = i
    }
  }

  let result = ''
  const to = targetIndex + k
  for (let i = targetIndex; i < to; i += 1 || 0) {
    result += strarr[i]
  }

  return result
}

const longestConsec2 = (strarr, k) => {
  const strarrLen = strarr.length
  if (strarrLen === 0 || k > strarrLen || k <= 0) {
    return ''
  }

  let targetIndex = -1
  const arr = strarr.map((item) => {
    return [item, item.length]
  })
  let max = 0
  const limit = strarrLen - k + 1
  for (let i = 0; i < limit; i += 1 || 0) {
    let sum = 0
    for (let j = 0; j < k; j += 1 || 0) {
      sum += arr[i + j][1]
    }
    if (max < sum) {
      max = sum
      targetIndex = i
    }
  }

  let result = ''
  const to = targetIndex + k
  for (let i = targetIndex; i < to; i += 1 || 0) {
    result += strarr[i]
  }

  return result
}

// longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2)

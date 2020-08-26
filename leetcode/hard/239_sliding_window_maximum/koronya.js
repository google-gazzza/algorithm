// [Hard] 239. Sliding Window Maximum
// 239_sliding_window_maximum

// https://leetcode.com/problems/sliding-window-maximum
// Runtime: 1588 ms, faster than 20.73% of JavaScript online submissions for Sliding Window Maximum.
// Memory Usage: 47.7 MB, less than 29.59% of JavaScript online submissions for Sliding Window Maximum.
const maxSlidingWindow = (nums, k) => {
  const numsLen = nums.length
  let max = Number.MIN_SAFE_INTEGER
  let tempArr = []
  const resultArr = []
  
  for (let i = 0; i < k; i = i + 1 | 0) {
    const num = nums[i]
    if (max < num) {
      tempArr = [num]
      max = num
    } else {
      tempArr.push(num)
    }
  }
  resultArr.push(max)

  for (let i = k; i < numsLen; i = i + 1 | 0) {
    const num = nums[i]
    if (max < num) {
      tempArr = [num]
      max = num
    } else {
      if (tempArr.length < k) {
        tempArr.push(num)
      } else {
        tempArr.shift()
        if (tempArr.length !== 0) {
          const tempMax = tempArr.reduce((max, cur) => max >= cur ? max : cur, Number.MIN_SAFE_INTEGER)
          if (tempMax < num) {
            tempArr = [num]
            max = num
          } else {
            tempArr.push(num)
            max = tempMax
          }
        } else {
          tempArr = [num]
          max = num
        }
      }
    }
    resultArr.push(max)
  }

  return resultArr
}


// https://leetcode.com/problems/sliding-window-maximum
// Runtime: 2672 ms, faster than 16.41% of JavaScript online submissions for Sliding Window Maximum.
// Memory Usage: 46.8 MB, less than 33.47% of JavaScript online submissions for Sliding Window Maximum.
const getMaxOfArr = arr => {
  return arr.reduce((acc, cur) => acc >= cur ? acc : cur, Number.MIN_SAFE_INTEGER)
}

const maxSlidingWindow2 = (nums, k) => {
  const numsLen = nums.length
  const resultArr = []
  let tempArr = []

  for (let i = 0; i < k; i = i + 1 | 0) {
    tempArr.push(nums[i])
  }
  resultArr.push(getMaxOfArr(tempArr))

  for (let i = k; i < numsLen; i = i + 1 | 0) {
    console.log('i: ', i);
    tempArr.shift()
    tempArr.push(nums[i])
    resultArr.push(getMaxOfArr(tempArr))
  }

  return resultArr
}

// [JS][7kyu] T.T.T. #9: Peaks and valleys
// t-t-t-9-peaks-and-valleys
// https://www.codewars.com/kata/5769e0db6a3efea1b1000010/train/javascript

const peakAndValley = (arr) => {
  const arrLen = arr.length
  const result = []
  for (let i = 3; i < arrLen - 3; i += 1) {
    const item = arr[i]
    const leftMin = Math.min(arr[i - 3], arr[i - 2], arr[i - 1])
    const leftMax = Math.max(arr[i - 3], arr[i - 2], arr[i - 1])
    const rightMin = Math.min(arr[i + 1], arr[i + 2], arr[i + 3])
    const rightMax = Math.max(arr[i + 1], arr[i + 2], arr[i + 3])
    if ((leftMin > item && rightMin > item) || (leftMax < item && rightMax < item)) {
      result.push(item)
    }
  }

  return result
}

peakAndValley([10, 20, 30, 40, 30, 20, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13])
peakAndValley([50, 84, 49, 47, 80, 87, 87, 53, 76, 30, 10])
peakAndValley([45, 94, 41, 76, 29, 96, 28, 13, 84, 69, 25])
peakAndValley([1, 16, 63, 78, 53, 78, 42, 39, 46, 88, 49, 96, 58, 82])
peakAndValley([45, 75, 47, 44, 93, 95, 31, 99, 49, 48, 76, 2, 92, 23, 26, 19, 60, 45, 51])
peakAndValley([49, 97, 76, 56, 96, 88, 65, 20, 14, 93, 32])

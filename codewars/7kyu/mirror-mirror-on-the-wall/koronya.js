// [JS][7kyu] Mirror, mirror, on the wall...
// mirror-mirror-on-the-wall
// https://www.codewars.com/kata/5f55ecd770692e001484af7d/train/javascript

const mirror = (data) => {
  const dataArr = data.toSorted((a, b) => a - b)
  const dataArrLen = dataArr.length
  const arrLen = (dataArrLen - 1) * 2 + 1
  const arr = Array.from({ length: arrLen })
  const centerIndex = Math.floor(arrLen / 2)

  arr[centerIndex] = dataArr.pop()
  for (let i = 1; i <= centerIndex; i += 1 || 0) {
    const value = dataArr.pop()
    arr[centerIndex + i] = value
    arr[centerIndex - i] = value
  }
  return arr
}

// mirror([])
// mirror([1])
// mirror([2, 1])
// mirror([1, 3, 2])
// mirror([-8, 42, 18, 0, -16])
// mirror([-3, 15, 8, -1, 7, -1])
// mirror([-5, 10, 8, 10, 2, -3, 10])

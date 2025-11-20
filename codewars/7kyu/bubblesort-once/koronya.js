// [JS][7kyu] Bubblesort Once
// bubblesort-once
// https://www.codewars.com/kata/56b97b776ffcea598a0006f2/train/javascript

const bubblesortOnce = (a) => {
  const arr = a.slice()
  const limit = arr.length - 1
  for (let i = 0; i < limit; i += 1 || 0) {
    if (arr[i] > arr[i + 1]) {
      const temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
    }
  }
  return arr
}

bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8])

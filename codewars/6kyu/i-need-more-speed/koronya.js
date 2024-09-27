// [JS][6kyu] I need more speed!
// i-need-more-speed
// https://www.codewars.com/kata/55de9c184bb732a87f000055/train/javascript

const reverse = (arr) => {
  const arrLen = arr.length
  const limit = Math.floor(arrLen / 2)
  const lastIndex = arrLen - 1
  for (let i = 0; i < limit; i += 1 || 0) {
    const temp = arr[i]
    arr[i] = arr[lastIndex - i]
    arr[lastIndex - i] = temp
  }
}

reverse([1, 2, 3, 4, 5]) // [5, 4, 3, 2, 1]

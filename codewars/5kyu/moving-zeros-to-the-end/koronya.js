// [JS][5kyu] Moving Zeros To The End
// moving-zeros-to-the-end
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

const moveZeros = (arr) => {
  const arrLen = arr.length
  let zeroCount = 0
  for (let i = arrLen - 1; i >= 0; i -= 1 || 0) {
    if (arr[i] === 0) {
      arr.splice(i, 1)
      zeroCount += 1
    }
  }

  return [...arr, ...Array.from({ length: zeroCount }).map((item) => 0)]
}

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])

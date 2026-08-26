// [JS][7kyu] Swap the head and the tail
// swap-the-head-and-the-tail
// https://www.codewars.com/kata/5a34f087c5e28462d9000082/train/javascript

const swapHeadAndTail = (arr) => {
  const arrLen = arr.length
  const halfLen = Math.floor(arrLen / 2)
  const first = arr.slice(0, halfLen)
  const last = arrLen % 2 === 0 ? arr.slice(halfLen) : arr.slice(halfLen + 1)
  const mid = arrLen % 2 === 0 ? [] : [arr[halfLen]]

  return [...last, ...mid, ...first]
}

swapHeadAndTail([1, 2, 3, 4, 5])
swapHeadAndTail([1, 2, 3, 4])


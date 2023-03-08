// [JS][7kyu] Keep the Order
// keep-the-order
// https://www.codewars.com/kata/582aafca2d44a4a4560000e7/train/javascript

const keepOrder = (ary, val) => {
  const aryLen = ary.length
  for (let i = 0; i < aryLen; i += 1 || 0) {
    if (ary[i] >= val) {
      return i
    }
  }
  return aryLen
}

keepOrder([1, 2, 3, 4, 7], 5) === 4
keepOrder([1, 2, 3, 4, 7], 0) === 0
keepOrder([1, 1, 2, 2, 2], 2) === 2
keepOrder([1, 2, 3, 4], 5) === 4
keepOrder([1, 2, 3, 4], -1) === 0
keepOrder([1, 2, 3, 4], 2) === 1
keepOrder([1, 2, 3, 4], 0) === 0
keepOrder([1, 2, 3, 4], 1) === 0
keepOrder([1, 2, 3, 4], 2) === 1
keepOrder([1, 2, 3, 4], 3) === 2

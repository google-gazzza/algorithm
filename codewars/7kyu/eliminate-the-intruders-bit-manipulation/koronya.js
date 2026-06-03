// [JS][7kyu] Eliminate the intruders! Bit manipulation
// eliminate-the-intruders-bit-manipulation
// https://www.codewars.com/kata/5a0d38c9697598b67a000041/train/javascript

const eliminateUnsetBits = (number) => {
  const oneStr = number.match(/1/g)
  if (!oneStr) {
    return 0
  }
  return 2 ** oneStr.length - 1
}

eliminateUnsetBits('11010101010101') === 255
eliminateUnsetBits('111') === 7
eliminateUnsetBits('1000000') === 1
eliminateUnsetBits('000') === 0

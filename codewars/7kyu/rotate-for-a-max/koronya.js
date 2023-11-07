// [JS][7kyu] Rotate for a Max
// rotate-for-a-max
// https://www.codewars.com/kata/56a4872cbb65f3a610000026/train/javascript

const rotateLeft = ([first, ...rest]) => [...rest, first]
const getNumber = (arr) => Number(arr.join(''))

const maxRot = (n) => {
  let max = n
  const nArr = String(n).split('')
  const nArrLen = nArr.length
  let prevArr = nArr
  for (let i = 0; i < nArrLen; i += 1 || 0) {
    prevArr.slice(0, i)
    prevArr.slice(i)
    prevArr = [...prevArr.slice(0, i), ...rotateLeft(prevArr.slice(i))]
    max = Math.max(max, getNumber(prevArr))
  }

  return max
}

maxRot(56789) === 68957
maxRot(38458215) === 85821534
maxRot(195881031) === 988103115
maxRot(896219342) === 962193428
maxRot(69418307) === 94183076

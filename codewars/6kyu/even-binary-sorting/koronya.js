// [JS][6kyu] Even Binary Sorting
// even-binary-sorting
// https://www.codewars.com/kata/582bbdbcc190132e3e0001f3/train/javascript

const evenBinary = (n) => {
  const arr = n.split(' ').map((value, index) => ({ value, index }))
  const evenArr = arr.filter(({ value }) => parseInt(value, 2) % 2 === 0)
  const evenIndexArr = evenArr.map((item) => item.index)
  evenArr.sort((a, b) => parseInt(a.value, 2) - parseInt(b.value, 2))
  const resultArr = [...arr].map((item) => item.value)
  const evenArrLen = evenArr.length
  for (let i = 0; i < evenArrLen; i += 1) {
    resultArr[evenIndexArr.shift()] = evenArr.shift().value
  }

  return resultArr.join(' ')
}

evenBinary('101 111 100 001 010') === '101 111 010 001 100'
// evenBinary('110 011 001 100 101') === '100 011 001 110 101'

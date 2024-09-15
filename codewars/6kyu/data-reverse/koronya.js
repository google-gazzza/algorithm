// [JS][6kyu] data-reverse
// data-reverse
// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript

const dataReverse = (data) => {
  const dataLen = data.length
  let target = 0
  const arr = []
  while (target < dataLen) {
    const item = data.slice(target, target + 8)
    arr.push(item)
    target += 8
  }
  return arr.reverse().reduce((acc, cur) => [...acc, ...cur], [])
}

dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0])

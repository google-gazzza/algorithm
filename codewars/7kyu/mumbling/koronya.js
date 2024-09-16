// [JS][7kyu] Mumbling
// mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

const accum = (s) => {
  let count = 0
  return s
    .split('')
    .map((item) => {
      count += 1
      return item.toUpperCase() + item.toLowerCase().repeat(count - 1)
    })
    .join('-')
}

accum('abcd')
accum('cwAt')

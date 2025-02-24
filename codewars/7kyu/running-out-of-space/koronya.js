// [JS][7kyu] Running out of space
// running-out-of-space
// https://www.codewars.com/kata/56576f82ab83ee8268000059/train/javascript

const spacey = (array) => {
  let acc = ''
  return array.map((item) => {
    acc += item
    return acc
  })
}

spacey(['kevin', 'has', 'no', 'space'])

// [JS][7kyu] Happy Birthday
// happy-birthday
// https://www.codewars.com/kata/5d65fbdfb96e1800282b5ee0/train/javascript

const wrap = (height, width, length) => {
  const arr = [height, width, length].sort((a, b) => a - b)
  return 4 * arr[0] + 2 * (arr[1] + arr[2]) + 20
}

// wrap(17, 32, 11) === 162
// wrap(13, 13, 13) === 124
// wrap(1, 3, 1) === 32

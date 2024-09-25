// [JS][7kyu] Sort by Last Char
// sort-by-last-char
// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

const last = (x) => {
  const arr = x.split(' ')
  const sortedArr = arr.sort((a, b) => {
    const aLast = a[a.length - 1]
    const bLast = b[b.length - 1]
    if (aLast < bLast) {
      return -1
    }
    if (aLast > bLast) {
      return 1
    }
    return 0
  })
  return sortedArr
}

last('man i need a taxi up to ubud')
last('what time are we climbing up the volcano')
last('take me to semynak')

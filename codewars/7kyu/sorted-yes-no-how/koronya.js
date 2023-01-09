// [JS][7kyu] Sorted? yes? no? how?
// sorted-yes-no-how
// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

const isSortedAndHow = (array) => {
  const newArr = [array[0]]
  const arrayLen = array.length
  let prev = array[0]
  for (let i = 1; i < arrayLen; i += 1 || 0) {
    const num = array[i]
    if (prev !== num) {
      newArr.push(num)
      prev = num
    }
  }

  const [first, second, ...rest] = newArr
  const isDescending = first > second

  if (isDescending === true) {
    let last = second
    while (rest.length > 0) {
      const num = rest.shift()
      if (last < num) {
        return 'no'
      }
      last = num
    }
  } else {
    let last = second
    while (rest.length > 0) {
      const num = rest.shift()
      if (last > num) {
        return 'no'
      }
      last = num
    }
  }

  return isDescending === true ? 'yes, descending' : 'yes, ascending'
}

isSortedAndHow([1, 2]) === 'yes, ascending'

isSortedAndHow([15, 7, 3, -8]) === 'yes, descending'

isSortedAndHow([4, 2, 30]) === 'no'

isSortedAndHow([1, 1, 1, 0, -1])

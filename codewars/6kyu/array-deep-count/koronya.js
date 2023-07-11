// [JS][6kyu] Array Deep Count
// array-deep-count
// https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript

const deepCount = (a) => {
  let sum = 0
  const deep = (arr) => {
    let count = 0
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        count += 1
        deep(item)
      } else {
        count += 1
      }
    })
    sum += count
  }
  deep(a)

  return sum
}

deepCount([])
deepCount([1, 2, 3])
deepCount(['x', 'y', ['z']])
deepCount([1, 2, [3, 4, [5]]])
deepCount([[[[[[[[[]]]]]]]]])

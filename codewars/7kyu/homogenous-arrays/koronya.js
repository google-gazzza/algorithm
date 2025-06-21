// [JS][7kyu] Homogenous arrays
// homogenous-arrays
// https://www.codewars.com/kata/57ef016a7b45ef647a00002d/train/javascript

const filterHomogenous = (arrays) => {
  return arrays.filter((arr) => {
    if (arr.length === 0) {
      return false
    }
    const firstType = typeof arr[0]
    return arr.every((item) => typeof item === firstType)
  })
}

filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])
filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []])

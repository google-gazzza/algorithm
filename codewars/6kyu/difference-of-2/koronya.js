// [JS][6kyu] Difference of 2
// difference-of-2
// https://www.codewars.com/kata/5340298112fa30e786000688/train/javascript

const twosDifference = (input) => {
  const inputSet = new Set(input.sort((a, b) => a - b))
  return [...inputSet].reduce((acc, cur) => {
    return inputSet.has(cur + 2) ? [...acc, [cur, cur + 2]] : acc
  }, [])
}

twosDifference([4, 2, 3, 1])
twosDifference([1, 2, 3, 4])
twosDifference([1, 3, 4, 6])

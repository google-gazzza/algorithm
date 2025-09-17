// [JS][7kyu] MinMaxMin: Bounded Nums
// min-max-min-bounded-nums
// https://www.codewars.com/kata/58d3487a643a3f6aa20000ff/train/javascript

const minMinMax = (array) => {
  const smallest = Math.min(...array)
  const largest = Math.max(...array)
  const numSet = new Set(array)
  let minimumAbsent = null
  for (let i = smallest + 1; i < largest; i += 1) {
    if (!numSet.has(i)) {
      minimumAbsent = i
      break
    }
  }
  return [smallest, minimumAbsent, largest]
}

minMinMax([-1, 4, 5, -23, 24])
minMinMax([1, 3, -3, -2, 8, -1])
minMinMax([2, -4, 8, -5, 9, 7])

// [JS][7kyu] Training Time
// training-time
// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript

const shuffleIt = (arr, ...shuffles) => {
  shuffles.forEach(([a, b]) => ([arr[a], arr[b]] = [arr[b], arr[a]]))
  return arr
}

shuffleIt([1, 2, 3, 4, 5], [1, 2])
shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4])
shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3])

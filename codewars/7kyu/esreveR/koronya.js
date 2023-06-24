// [JS][7kyu] esreveR
// esreveR
// https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript

// const reverse = (array) => array.reverse()
const reverse = (array) => {
  const result = []
  while (array.length > 0) {
    result.push(array.pop())
  }
  return result
}

reverse([1, 2, 3])
reverse([1, null, 14, 'two'])
reverse([931, 227, 180, 406, 633])

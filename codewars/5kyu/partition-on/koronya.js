// [JS][5kyu] Partition On
// partition-on
// https://www.codewars.com/kata/525a037c82bf42b9f800029b/train/javascript

// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
const partitionOn = (pred, items) => {
  const falseArr = []
  const trueArr = []
  items.forEach((item) => {
    if (pred(item)) {
      trueArr.push(item)
    } else {
      falseArr.push(item)
    }
  })

  items.length = 0
  items.push(...falseArr)
  items.push(...trueArr)
  return falseArr.length
}

let items = [1, 2, 3, 4, 5, 6]
function isEven(n) {
  return n % 2 == 0
}
const i = partitionOn(isEven, items)

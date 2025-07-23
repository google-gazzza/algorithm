// [JS][7kyu] Simple Fun #334: Two Beggars And Gold
// simple-fun-334-two-beggars-and-gold
// https://www.codewars.com/kata/59547688d8e005759e000092/train/javascript

const getOne = (arr) => {
  const arrLen = arr.length
  if (arrLen === 1) {
    return { item: arr[0], arr: [] }
  }
  const index = arr[0] < arr[arrLen - 1] ? arrLen - 1 : 0
  const item = arr.splice(index, 1)[0]
  return { item, arr }
}

const distributionOf = (golds) => {
  let sumA = 0
  let sumB = 0
  let isOrderA = true

  while (golds.length > 0) {
    const { item, arr } = getOne(golds)
    if (isOrderA) {
      sumA += item
    } else {
      sumB += item
    }
    isOrderA = !isOrderA
    golds = arr
  }

  return [sumA, sumB]
}

distributionOf([4, 2, 9, 5, 2, 7])
distributionOf([4, 7, 2, 9, 5, 2])
distributionOf([10, 1000, 2, 1])

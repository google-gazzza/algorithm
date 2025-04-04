// [JS][6kyu] Find a Bunch of Common Elements of Two Lists in a Certain Range
// find-a-bunch-of-common-elements-of-two-lists-in-a-certain-range
// https://www.codewars.com/kata/58161c5ac7e37d17fc00002f/train/javascript

const filterEvenOrOdd = (arr, evenStr) => {
  const isEven = evenStr === 'even'
  return arr.filter((item) => (isEven ? item % 2 === 0 : item % 2 !== 0))
}

const findArr = (arrA, arrB, rng, wanted) => {
  const aMap = new Map()
  const bMap = new Map()
  arrA.filter((item) => item >= rng[0] && item <= rng[1]).forEach((item) => aMap.set(item, (aMap.get(item) || 0) + 1))
  arrB.filter((item) => item >= rng[0] && item <= rng[1]).forEach((item) => bMap.set(item, (bMap.get(item) || 0) + 1))

  const resultArr = []
  ;[...aMap.keys()].forEach((key) => {
    if (bMap.has(key)) {
      const aCount = aMap.get(key)
      const bCount = bMap.get(key)
      if (aCount >= 2 && bCount >= 2) {
        resultArr.push(key)
      }
    }
  })
  return filterEvenOrOdd(resultArr, wanted).sort((a, b) => a - b)
}

findArr([1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3], [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0], [-4, 4], 'odd')
findArr([1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4], [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4], [-4, 4], 'even')

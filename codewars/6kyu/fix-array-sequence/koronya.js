// [JS][6kyu] Fix array sequence
// fix-array-sequence
// https://www.codewars.com/kata/5b7bae02402fb702ce000159/train/javascript

const getResultArr = (obj, arr) => {
  const resultArr = []
  let element = obj
  while (element) {
    resultArr.push(element.num)
    if (element.candidateArr.length === 0) {
      break
    }
    element = arr[element.candidateArr[0].index]
  }
  return resultArr
}

const solve = (arr) => {
  const mappedArr = arr.map((num, index) => ({ num, index }))
  const adjustArr = mappedArr.map((obj) => {
    const { num } = obj
    const tempArr = []
    tempArr.push(num * 2)
    if (num % 3 === 0) {
      tempArr.push(num / 3)
    }
    const candidateArr = []
    tempArr.forEach((n) => {
      const findIndex = mappedArr.findIndex((numObj) => numObj.num === n)
      if (findIndex !== -1) {
        candidateArr.push(mappedArr[findIndex])
      }
    })
    return { ...obj, candidateArr }
  })
  let resultArr = []
  const validLength = adjustArr.length - 1
  adjustArr.some((obj) => {
    let count = 1
    let element = obj
    while (count <= validLength) {
      const { candidateArr } = element
      if (candidateArr.length === 0) {
        return false
      }
      element = adjustArr[candidateArr[0].index]
      count += 1
    }
    resultArr = getResultArr(obj, adjustArr)
    return true
  })

  return resultArr
}

// solve([1, 3])
solve([12, 3, 9, 4, 6, 8])
// solve([4, 8, 6, 3, 12, 9])
// solve([558, 744, 1488, 279, 2232, 1116])
// solve([9, 1, 3])
// solve([4, 1, 2])

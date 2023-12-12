// [JS][5kyu] Buddy Pairs
// buddy-pairs
// https://www.codewars.com/kata/59ccf051dcc4050f7800008f/train/javascript

const sumMap = new Map()

const getMemoizedSum = (num) => {
  if (sumMap.has(num)) {
    return sumMap.get(num)
  }
  const divisors = getDivisors(num)
  const sum = getSumOfArray(divisors)
  sumMap.set(num, sum)
  return sum
}

const getSumOfArray = (arr) => arr.reduce((acc, cur) => acc + cur, 0)

const getDivisors = (num) => {
  const divisors = [1]
  const limit = Math.sqrt(num)
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      const isSame = i === num / i
      divisors.push(i)
      if (isSame === false) {
        divisors.push(num / i)
      }
    }
  }
  return divisors
}

const buddy = (start, limit) => {
  let index = start
  while (index <= limit) {
    const sum = getMemoizedSum(index)
    const buddyNum = sum - 1
    const buddySum = getMemoizedSum(buddyNum)
    if (buddySum === index + 1 && buddyNum > start) {
      return [index, buddyNum]
    }
    index += 1
  }

  return 'Nothing'
}

// buddy(23, 4669)
// buddy(4952, 6539)
// buddy(381, 4318)
// buddy(2382, 3679)

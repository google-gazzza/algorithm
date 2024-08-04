// [JS][7kyu] Array Leaders (Array Series #3)
// array-leaders-array-series-3
// https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript

const arrayLeaders = (numbers) => {
  const result = []
  const numbersLen = numbers.length
  let sum = numbers.reduce((acc, cur) => acc + cur, 0)
  for (let i = 0; i < numbersLen; i += 1 || 0) {
    const num = numbers[i]
    sum -= num
    if (num > sum) {
      result.push(num)
    }
  }

  return result
}

arrayLeaders([1, 2, 3, 4, 0])
arrayLeaders([16, 17, 4, 3, 5, 2])
arrayLeaders([-1, -29, -26, -2])
arrayLeaders([-36, -12, -27])
arrayLeaders([5, -2, 2])
arrayLeaders([0, -1, -29, 3, 2])

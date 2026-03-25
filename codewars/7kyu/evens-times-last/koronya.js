// [JS][7kyu] Evens times last
// evens-times-last
// https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript

const evenLast = (numbers) => {
  if (numbers.length === 0) {
    return 0
  }
  const lastItem = numbers[numbers.length - 1]
  return numbers.reduce((acc, curr, index) => (index % 2 === 0 ? acc + curr : acc), 0) * lastItem
}

evenLast([2, 3, 4, 5]) === 30
evenLast([])

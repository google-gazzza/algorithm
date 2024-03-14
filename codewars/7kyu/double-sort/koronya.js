// [JS][7kyu] Double Sort
// double-sort
// https://www.codewars.com/kata/57cc79ec484cf991c900018d/train/javascript

const dbSort = (a) => {
  const numArr = a.filter((item) => typeof item === 'number').sort((a, b) => a - b)
  const strArr = a.filter((item) => typeof item === 'string').sort()
  return [...numArr, ...strArr]
}

dbSort([6, 2, 3, 4, 5])
dbSort([14, 32, 3, 5, 5])
dbSort([1, 2, 3, 4, 5])
dbSort(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2])
dbSort(['C', 'W', 'W', 'W', 1, 2, 0])
dbSort(['Apple', 46, '287', 574, 'Peach', '3', '69', 78, 'Grape', '423'])

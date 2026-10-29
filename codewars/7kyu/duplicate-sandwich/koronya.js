// [JS][7kyu] Duplicate sandwich
// duplicate-sandwich
// https://www.codewars.com/kata/5f8a15c06dbd530016be0c19/train/javascript

const duplicateSandwich = (a) => {
  let index = 0
  while (true) {
    const item = a[index]
    if (index !== a.lastIndexOf(item)) {
      lastIndex = a.lastIndexOf(item)
      break
    }
    index += 1
  }

  return a.slice(index + 1, lastIndex)
}

duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8])
duplicateSandwich(['None', 'Hello', 'Example', 'hello', 'None', 'Extra'])
duplicateSandwich([0, 0])
duplicateSandwich([true, false, true])
duplicateSandwich('example')

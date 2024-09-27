// [JS][6kyu] Simple Fun #79: Delete a Digit
// simple-fun-79-delete-a-digit
// https://www.codewars.com/kata/5894318275f2c75695000146/train/javascript

const deleteDigit = (n) => {
  const str = String(n)
  const arr = []
  for (let i = 0; i < str.length; i += 1 || 0) {
    arr.push(Number(str.slice(0, i) + str.slice(i + 1)))
  }
  return Math.max(...arr)
}

deleteDigit(152) === 52

deleteDigit(1001) === 101

deleteDigit(10) === 1

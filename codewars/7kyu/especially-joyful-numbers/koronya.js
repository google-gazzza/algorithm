// [JS][7kyu] Especially Joyful Numbers
// especially-joyful-numbers
// https://www.codewars.com/kata/570523c146edc287a50014b1/train/javascript

const numberJoy = (n) => {
  const sum = String(n)
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0)
  const reverseSum = Number(sum.toString().split('').reverse().join(''))
  return sum * reverseSum === n
}

numberJoy(1997) === false
numberJoy(1998) === false
numberJoy(1729) === true
numberJoy(18) === false
numberJoy(1) === true
numberJoy(81) === true
numberJoy(1458) === true

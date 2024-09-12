// [JS][6kyu] Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?
// exclamation-marks-series-17-put-the-exclamation-marks-and-question-marks-on-the-balance-are-they-balanced
// https://www.codewars.com/kata/57fb44a12b53146fe1000136/train/javascript

const getValue = (str) => str.split('').reduce((acc, cur) => acc + (cur === '!' ? 2 : 3), 0)

const balance = (left, right) => {
  const leftValue = getValue(left)
  const rightValue = getValue(right)
  if (leftValue === rightValue) {
    return 'Balance'
  }
  return leftValue > rightValue ? 'Left' : 'Right'
}

balance('!!', '??') === 'Right'
balance('!??', '?!!') === 'Left'
balance('!?!!', '?!?') === 'Left'
balance('!!???!????', '??!!?!!!!!!!') === 'Balance'

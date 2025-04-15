// [JS][7kyu] Battle of the characters (Easy)
// battle-of-the-characters-easy
// https://www.codewars.com/kata/595519279be6c575b5000016/train/javascript

const CHARCODE_OF_A = 'A'.charCodeAt(0)
const getPower = (str) => str.split('').reduce((acc, cur) => acc + cur.charCodeAt(0) - CHARCODE_OF_A + 1, 0)
const battle = (x, y) => {
  const xPower = getPower(x)
  const yPower = getPower(y)
  return xPower > yPower ? x : yPower > xPower ? y : 'Tie!'
}

battle('AAA', 'Z')
battle('ONE', 'TWO')
battle('ONE', 'NEO')
battle('FOUR', 'FIVE')

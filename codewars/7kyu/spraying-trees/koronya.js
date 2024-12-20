// [JS][7kyu] Spraying trees
// spraying-trees
// https://www.codewars.com/kata/5981a139f5471fd1b2000071/train/javascript

const WEEKDAY_INFO = {
  Monday: 'James',
  Tuesday: 'John',
  Wednesday: 'Robert',
  Thursday: 'Michael',
  Friday: 'William',
}

const task = (w, n, c) => `It is ${w} today, ${WEEKDAY_INFO[w]}, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`

task('Wednesday', 10, 2)
task('Wednesday', 10, 2) === 'It is Wednesday today, Robert, you have to work, you must spray 10 trees and you need 20 dollars to buy liquid'
task('Monday', 4, 3) === 'It is Monday today, James, you have to work, you must spray 4 trees and you need 12 dollars to buy liquid'
task('Friday', 5, 4) === 'It is Friday today, William, you have to work, you must spray 5 trees and you need 20 dollars to buy liquid'
task('Tuesday', 6, 1) === 'It is Tuesday today, John, you have to work, you must spray 6 trees and you need 6 dollars to buy liquid'
task('Thursday', 5, 3) === 'It is Thursday today, Michael, you have to work, you must spray 5 trees and you need 15 dollars to buy liquid'

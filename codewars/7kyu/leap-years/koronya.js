// [JS][7kyu] Leap Years
// leap-years
// https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript

const isLeapYear = (year) => (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)

isLeapYear(1234) === false
isLeapYear(1984) === true
isLeapYear(2000) === true
isLeapYear(2010) === false
isLeapYear(2013) === false

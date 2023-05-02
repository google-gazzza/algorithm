// [JS][8kyu] Do I get a bonus?
// do-i-get-a-bonus
// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

const bonusTime = (salary, bonus) => (bonus === true ? `£${salary * 10}` : `£${salary}`)

bonusTime(10000, true) === '£100000'
bonusTime(25000, true) === '£250000'
bonusTime(10000, false) === '£10000'
bonusTime(60000, false) === '£60000'
bonusTime(2, true) === '£20'
bonusTime(78, false) === '£78'
bonusTime(67890, true) === '£678900'

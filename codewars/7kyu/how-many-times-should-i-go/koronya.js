// [JS][7kyu] How many times should I go?
// how-many-times-should-i-go
// https://www.codewars.com/kata/57efcb78e77282f4790003d8/train/javascript

const howManyTimes = (annualPrice, individualPrice) => Math.ceil(annualPrice / individualPrice)

howManyTimes(40, 15) === 3
howManyTimes(30, 10) === 3
howManyTimes(80, 15) === 6

// [JS][7kyu] JavaScript Array Filter
// java-script-array-filter
// https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript

const getEvenNumbers = (numbersArray) => numbersArray.filter((num) => num % 2 === 0)

getEvenNumbers([1, 2, 3, 6, 8, 10])
getEvenNumbers([1, 2])
getEvenNumbers([12, 14, 15])
getEvenNumbers([13, 15])
getEvenNumbers([1, 3, 9])

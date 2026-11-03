// [JS][7kyu] Thinkful - Number Drills: Congo warehouses
// thinkful-number-drills-congo-warehouses
// https://www.codewars.com/kata/5862e7c63f8628a126000e18/train/javascript

const boxCapacity = (length, width, height) => [length, width, height].map((num) => Math.floor((num / 16) * 12)).reduce((acc, curr) => acc * curr, 1)

boxCapacity(32, 64, 16) === 13824
boxCapacity(20, 20, 20) === 3375
boxCapacity(80, 40, 20) === 27000
boxCapacity(99, 71, 49) === 141192

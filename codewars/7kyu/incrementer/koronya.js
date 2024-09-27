// [JS][7kyu] Incrementer
// incrementer
// https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript

const incrementer = (nums) => nums.map((num, index) => (num + index + 1) % 10)

incrementer([])
incrementer([1, 2, 3])
incrementer([4, 6, 7, 1, 3])
incrementer([3, 6, 9, 8, 9])

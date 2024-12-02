// [JS][7kyu] Functional Addition
// functional-addition
// https://www.codewars.com/kata/538835ae443aae6e03000547/train/javascript

const add = (n) => (num) => n + num

const addOne = add(1)
addOne(3) // 4

const addThree = add(3)
addThree(3) // 6

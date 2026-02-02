// [JS][7kyu] We Have Liftoff
// we-have-liftoff
// https://www.codewars.com/kata/53d6387b83db278202000802/train/javascript

const liftoff = (instructions) => {
  instructions.sort((a, b) => b - a)
  return instructions.join(' ') + ' liftoff!'
}

liftoff([8, 1, 10, 2, 7, 9, 6, 3, 4, 5]) === '10 9 8 7 6 5 4 3 2 1 liftoff!'
liftoff([1, 2, 4, 3, 5]) === '5 4 3 2 1 liftoff!'

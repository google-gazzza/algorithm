// [JS][7kyu] How many arguments
// how-many-arguments
// https://www.codewars.com/kata/5c44b0b200ce187106452139/train/javascript

function args_count() {
  return arguments.length
}

args_count(1, 2) === 2
args_count() === 0
args_count('A', 'B', 'C') === 3
args_count(['foo', 'bar']) === 1

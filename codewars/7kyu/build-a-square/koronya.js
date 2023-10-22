// [JS][7kyu] Build a square
// build-a-square
// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript

const generateShape = (integer) => {
  const element = '+'.repeat(integer)
  return new Array(integer).fill(element).join('\n')
}

generateShape(8) === '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'

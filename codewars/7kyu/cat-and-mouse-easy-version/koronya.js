// [JS][7kyu] Cat and Mouse - Easy Version
// cat-and-mouse-easy-version
// https://www.codewars.com/kata/57ee24e17b45eff6d6000164/train/javascript

const catMouse = (x) => {
  const distance = x.split('').filter((char) => char === '.').length
  return distance > 3 ? 'Escaped!' : 'Caught!'
}

catMouse('C....m') === 'Escaped!'
catMouse('C..m') === 'Caught!'
catMouse('C.....m') === 'Escaped!'

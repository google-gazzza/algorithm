// [JS][7kyu] White or Black?
// white-or-black
// https://www.codewars.com/kata/563319974612f4fa3f0000e0/train/javascript

const mineColor = (file, rank) => {
  const isEvenRow = rank % 2 === 1
  const isEvenCol = file.charCodeAt(0) % 2 === 1
  if (isEvenRow) {
    return isEvenCol ? 'black' : 'white'
  }
  return isEvenCol ? 'white' : 'black'
}

mineColor('a', 8) === 'white'
mineColor('b', 2) === 'black'
mineColor('f', 5) === 'white'

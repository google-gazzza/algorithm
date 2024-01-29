// [JS][6kyu] Cat and Mouse - Harder Version
// cat-and-mouse-harder-version
// https://www.codewars.com/kata/57ee2a1b7b45efcf700001bf/train/javascript

const catMouse = (x, j) => {
  const cat = x.indexOf('C')
  const mouse = x.indexOf('m')
  const dog = x.indexOf('D')
  if (cat === -1 || mouse === -1 || dog === -1) {
    return 'boring without all three'
  }

  const isSameSideCatAndDog = (cat < mouse && dog < mouse) || (cat > mouse && dog > mouse)
  const catDistance = Math.abs(cat - mouse)
  const dogDistance = Math.abs(dog - mouse)
  if (isSameSideCatAndDog === true) {
    if (catDistance < dogDistance) {
      if (catDistance <= j) {
        return 'Caught!'
      } else {
        return 'Escaped!'
      }
    } else {
      if (catDistance <= j) {
        return 'Protected!'
      } else {
        return 'Escaped!'
      }
    }
  } else {
    if (catDistance <= j) {
      return 'Caught!'
    } else {
      return 'Escaped!'
    }
  }
}

catMouse('..D.....Cm', 13) === 'Caught!'
catMouse('............C.............D..m...', 8) === 'Escaped!'
catMouse('m.C...', 5) === 'boring without all three'

catMouse('.C.m..D...........', 10) === 'Caught!'
catMouse('...m.........C...D', 10) === 'Caught!'
catMouse('...m....D....C.......', 10) === 'Protected!'

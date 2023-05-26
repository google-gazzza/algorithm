// [JS][7kyu] Valid Spacing
// valid-spacing
// https://www.codewars.com/kata/5f77d62851f6bc0033616bd8/train/javascript

const validSpacing = (s) => {
  const trimS = s.trim()
  if (trimS !== s) {
    return false
  }
  const splitS = trimS.split(' ')
  if (splitS.length < 2) {
    return true
  }
  if (splitS.some((item) => item === '')) {
    return false
  }

  return true
}

validSpacing('Hello world') === true
validSpacing('Hello  world') === false
validSpacing(' Hello world') === false
validSpacing('Hello  world ') === false
validSpacing('Hello') === true
validSpacing('Helloworld') === true

validSpacing(' ') === false
validSpacing('') === true

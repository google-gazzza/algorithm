// [JS][6kyu] One down
// one-down
// https://www.codewars.com/kata/56419475931903e9d1000087/train/javascript

const convertChar = (char) => {
  if (/[a-zA-Z]/.test(char)) {
    if (char === 'a') {
      return 'Z'
    }
    if (char === 'A') {
      return 'z'
    }
    return String.fromCharCode(char.charCodeAt(0) - 1)
  }
  return char
}

const oneDown = (str) => {
  if (typeof str !== 'string') {
    return 'Input is not a string'
  }
  return str.split('').map(convertChar).join('')
}

oneDown('Ifmmp') === 'Hello'
oneDown('Uif usjdl up uijt lbub jt tjnqmf') === 'The trick to this kata is simple'
oneDown(45) === 'Input is not a string'
oneDown('XiBu BcPvU dSbaz UfYu') === 'WhAt AbOuT cRaZy TeXt'

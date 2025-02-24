// [JS][7kyu] replace-every-nth
// replace-every-nth
// https://www.codewars.com/kata/57fcaed83206fb15fd00027a/train/javascript

const replaceNth = (text, n, oldValue, newValue) => {
  if (n <= 0) {
    return text
  }
  let count = 0
  return text
    .split('')
    .map((char) => {
      if (char === oldValue) {
        count += 1
        if (count % n === 0) {
          return newValue
        }
      }
      return char
    })
    .join('')
}

replaceNth('Vader said: No, I am your father!', 2, 'a', 'o') === 'Vader soid: No, I am your fother!'
replaceNth('Vader said: No, I am your father!', 4, 'a', 'o') === 'Vader said: No, I am your fother!'
replaceNth('Vader said: No, I am your father!', 6, 'a', 'o') === 'Vader said: No, I am your father!'
replaceNth('Vader said: No, I am your father!', 0, 'a', 'o') === 'Vader said: No, I am your father!'
replaceNth('Vader said: No, I am your father!', -2, 'a', 'o') === 'Vader said: No, I am your father!'
replaceNth('Vader said: No, I am your father!', 1, 'i', 'y') === 'Vader sayd: No, I am your father!'

replaceNth('Luke cries: Noooooooooooooooo!', 6, 'o', 'i') === 'Luke cries: Noooooioooooioooo!'

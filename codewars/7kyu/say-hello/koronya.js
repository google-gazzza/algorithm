// [JS][7kyu] Say hello!
// say-hello
// https://www.codewars.com/kata/55955a48a4e9c1a77500005a/train/javascript

const greet = (name) => {
  if (name === null || name === '') {
    return null
  }
  return `hello ${name}!`
}

greet('Niks') === 'hello Niks!'
greet(null) === null
greet('') === null

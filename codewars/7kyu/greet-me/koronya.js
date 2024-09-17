// [JS][7kyu] Greet Me
// greet-me
// https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript

const greet = (name) => {
  const [first, ...rest] = name
  return `Hello ${first.toUpperCase()}${rest.join('').toLowerCase()}!`
}

greet('riley') === 'Hello Riley!'

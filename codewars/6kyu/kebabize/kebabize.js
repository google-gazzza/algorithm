// kebabize
// https://www.codewars.com/kata/57f8ff867a28db569e000c4a

const kebabize = (str) => str.replace(/\d/gi, '')
  .replace(/([A-Z])/g, `-$1`)
  .replace(/^-/, '')
  .toLowerCase();

console.log(kebabize('myCamelCasedString'), 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');

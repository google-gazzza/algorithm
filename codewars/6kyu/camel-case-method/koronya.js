// [JS][6kyu] CamelCase Method
// camel-case-method
// https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript

String.prototype.camelCase = function () {
  return this.split(' ')
    .filter((item) => item)
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join('')
}
'test case'.camelCase()

'test case'.camelCase() === 'TestCase'
'camel case method'.camelCase() === 'CamelCaseMethod'
'say hello '.camelCase() === 'SayHello'
' camel case word'.camelCase() === 'CamelCaseWord'
''.camelCase() === ''

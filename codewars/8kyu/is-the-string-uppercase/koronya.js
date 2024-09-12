// [JS][8kyu] Is the string uppercase?
// is-the-string-uppercase
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

String.prototype.isUpperCase = function () {
  return this.toUpperCase() === String(this)
}

'hello I AM DONALD'.isUpperCase()
'AM DONALD'.isUpperCase()

// [JS][6kyu] Custom FizzBuzz Array
// custom-fizz-buzz-array
// https://www.codewars.com/kata/5355a811a93a501adf000ab7/train/javascript

const fizzBuzzCustom = (stringOne = 'Fizz', stringTwo = 'Buzz', numOne = 3, numTwo = 5) => {
  return Array.from({ length: 100 }, (_, i) => {
    const arrayIndex = i + 1
    let result = ''
    if (arrayIndex % numOne === 0) {
      result += stringOne
    }
    if (arrayIndex % numTwo === 0) {
      result += stringTwo
    }
    return result || arrayIndex
  })
}

fizzBuzzCustom()[15]
fizzBuzzCustom()[44]
fizzBuzzCustom('Hey', 'There')[25]
fizzBuzzCustom('Hey', 'There')[11]
fizzBuzzCustom("What's ", 'up?', 3, 7)[80]

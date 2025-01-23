// [JS][7kyu] Selective fear of numbers
// selective-fear-of-numbers
// https://www.codewars.com/kata/55b1fd84a24ad00b32000075/train/javascript

const AmIAfraid = (day, num) => {
  switch (day) {
    case 'Monday':
      return num === 12
    case 'Tuesday':
      return num > 95
    case 'Wednesday':
      return num === 34
    case 'Thursday':
      return num === 0
    case 'Friday':
      return num % 2 === 0
    case 'Saturday':
      return num === 56
    case 'Sunday':
      return Math.abs(num) === 666
    default:
      return false
  }
}

AmIAfraid('Monday', 13) === false
AmIAfraid('Sunday', -666) === true
AmIAfraid('Tuesday', 2) === false
AmIAfraid('Tuesday', 965) === true
AmIAfraid('Friday', 2) === true

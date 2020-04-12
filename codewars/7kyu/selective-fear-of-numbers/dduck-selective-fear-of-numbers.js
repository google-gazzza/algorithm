// https://www.codewars.com/kata/55b1fd84a24ad00b32000075/

const AmIAfraid = function (day, num) {
  switch (day) {
    case 'Monday':
      return num === 12;
    case 'Tuesday':
      return num > 95;
    case 'Wednesday':
      return num === 34;
    case 'Thursday':
      return num === 0;
    case 'Friday':
      return num % 2 === 0;
    case 'Saturday':
      return num === 56;
    default:
      return num === 666 || num === -666;
  }
};

console.log(AmIAfraid('Monday', 13), false, 'Should return false');
console.log(AmIAfraid('Sunday', -666), true, 'Should return true');
console.log(AmIAfraid('Tuesday', 2), false, 'Should return false');
console.log(AmIAfraid('Tuesday', 965), true, 'Should return true');
console.log(AmIAfraid('Friday', 2), true, 'Should return true');

// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/train/javascript

const jumpingNumber = (n) => {
  const isJumpingNumber = String(n)
    .split('')
    .reduce((a, c, i, arr) => {
      if (Math.abs(a - c) === 1) {
        return c;
      }
      arr.splice(1);
      return null;
    });
  return isJumpingNumber ? 'Jumping!!' : 'Not!!';
};

console.log(jumpingNumber(1), 'Jumping!!');
console.log(jumpingNumber(7), 'Jumping!!');
console.log(jumpingNumber(9), 'Jumping!!');
console.log(jumpingNumber(23), 'Jumping!!');
console.log(jumpingNumber(32), 'Jumping!!');
console.log(jumpingNumber(79), 'Not!!');
console.log(jumpingNumber(98), 'Jumping!!');
console.log(jumpingNumber(8987), 'Jumping!!');
console.log(jumpingNumber(4343456), 'Jumping!!');
console.log(jumpingNumber(98789876), 'Jumping!!');
console.log(jumpingNumber(999), 'Jumping!!');

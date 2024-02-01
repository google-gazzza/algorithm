// https://www.codewars.com/kata/567e8f7b4096f2b4b1000005/train/javascript

String.prototype.eightBitNumber = function () {
  const value = parseInt(this.valueOf(), 10);
  return value.toString() === this.valueOf() && value < 256;
};

console.log(''.eightBitNumber(), false);
console.log('0'.eightBitNumber(), true);
console.log('00'.eightBitNumber(), false);
console.log('55'.eightBitNumber(), true);
console.log('042'.eightBitNumber(), false);
console.log('123'.eightBitNumber(), true);
console.log('255'.eightBitNumber(), true);
console.log('256'.eightBitNumber(), false);
console.log('999'.eightBitNumber(), false);

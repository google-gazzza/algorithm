// is-the-string-uppercase
// Is the string uppercase?
// difficulty: 8kyu
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

String.prototype.isUpperCase = function () {
  return this.toString() === this.toUpperCase();
};


console.log(''.isUpperCase() !== undefined, 'Must define the prototype isUpperCase');
console.log('c'.isUpperCase(), false, 'c is not upper case');
console.log('C'.isUpperCase(), true, 'C is upper case');
console.log('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
console.log('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
console.log('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
console.log('hello world'.isUpperCase(), false, 'hello world is not upper case');
console.log('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
console.log('hello World'.isUpperCase(), false, 'hello World is not upper case');
console.log('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');
console.log('Bob walks his dog every day.'.isUpperCase(), false, 'Bob walks his dog every day. is not upper case');
console.log('BOB walks his dog every day.'.isUpperCase(), false, 'BOB walks his dog every day. is not upper case');
console.log('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
console.log('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
console.log('#lovewins'.isUpperCase(), false, '#lovewins is not upper case');
console.log('#Lovewins'.isUpperCase(), false, '#Lovewins is not upper case');
console.log('#loveWins'.isUpperCase(), false, '#loveWins is not upper case');
console.log('#LoveWins'.isUpperCase(), false, '#LoveWins is not upper case');
console.log('#LOVEWins'.isUpperCase(), false, '#LOVEWins is not upper case');
console.log('#LoveWINS'.isUpperCase(), false, '#LoveWINS is not upper case');
console.log('#LOVEWINs'.isUpperCase(), false, '#LOVEWINs is not upper case');
console.log('#lOVEWINS'.isUpperCase(), false, '#lOVEWINS is not upper case');
console.log('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');

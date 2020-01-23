// https://www.codewars.com/kata/regexp-basics-is-it-a-digit/

String.prototype.digit = function () {
  return !!this.match(/^[0-9]$/g);
};

// for multiple digit
// return (this.match(/[0-9]/g) && this.match(/[0-9]/g).length) === this.length;

// ''.digit();
//?
// , false);
'7'.digit();
//?
// , true);
// ' '.digit();
//?
//, false);
// 'a'.digit();
//?
//, false);
// 'a5'.digit();
//?
// //, false);
// '5a'.digit();
//?
// false

'14'.digit();
//?
//, false);

// describe('hex number', () => {
//   it('Basic tests', () => {
//     Test.assertEquals(''.digit(), false);
//     Test.assertEquals('7'.digit(), true);
//     Test.assertEquals(' '.digit(), false);
//     Test.assertEquals('a'.digit(), false);
//     Test.assertEquals('a5'.digit(), false);
//     Test.assertEquals('14'.digit(), false);
//   });
// });

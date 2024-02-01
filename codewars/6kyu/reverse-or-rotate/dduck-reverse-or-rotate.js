// reverse-or-rotate
// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

const revrot = (str, sz, result = '') => {
  if (str.length < sz || sz === 0) {
    return result;
  }
  
  let chunk = str.slice(0, sz).split('');
  if (chunk.reduce((a, c) => a + Number(c), 0) % 2 === 0) {
    chunk = chunk.reverse();
  } else {
    chunk = [...chunk.slice(1), chunk[0]];
  }
  
  return revrot(str.slice(sz), sz, result + chunk.join(''));
};

console.log(revrot("123456987654", 6));
// --> "234561876549"
console.log(revrot("123456987653", 6));
// // --> "234561356789"
console.log(revrot("66443875", 4));
// // --> "44668753"
console.log(revrot("66443875", 8));
// // --> "64438756"
console.log(revrot("664438769", 8));
// // --> "67834466"
console.log(revrot("123456779", 8));
// // --> "23456771"
console.log(revrot("", 8));
// // --> ""
console.log(revrot("123456779", 0));
// // --> ""
console.log(revrot("563000655734469485", 4));
// // --> "0365065073456944"

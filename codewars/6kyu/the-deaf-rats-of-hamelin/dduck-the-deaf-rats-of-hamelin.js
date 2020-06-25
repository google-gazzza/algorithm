// the-deaf-rats-of-hamelin
// The Deaf Rats of Hamelin
// https://www.codewars.com/kata/598106cb34e205e074000031

const countDeafRats = (town) => {
  const [left, right] = town.replace(/\s/g, '').split('P');
  return (left.match(/.{2}/gm) || []).filter((v) => v === 'O~').length
    + (right.match(/.{2}/gm) || []).filter((v) => v === '~O').length;
};


// test code
console.log(countDeafRats("~O~O~O~O P"), 0);
console.log(countDeafRats("P O~ O~ ~O O~"), 1);
console.log(countDeafRats("~O~O~O~OP~O~OO~"), 2);

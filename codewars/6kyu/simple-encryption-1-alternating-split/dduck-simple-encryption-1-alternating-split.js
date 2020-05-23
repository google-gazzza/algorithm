// simple-encryption-1-alternating-split
// https://www.codewars.com/kata/57814d79a56c88e3e0000786

const encrypt = (text, n) => {
  if (n <= 0 || !text) {
    return text;
  }
  
  let left = [];
  let right = [];
  [...text].forEach((v, i) => {
    if (i % 2 === 0) {
      right.push(v);
    } else {
      left.push(v);
    }
  });
  
  return encrypt(left.concat(right).join(''), n - 1);
};

const decrypt = (encryptedText, n) => {
  if (n <= 0) {
    return encryptedText;
  }
  
  let halfLength = Math.floor(encryptedText.length / 2);
  let left = [...encryptedText.slice(0, halfLength)];
  let right = [...encryptedText.slice(halfLength)];
  
  return decrypt(right.map((v) => v + (left.shift() || '')).join(''), n - 1);
};

console.log(encrypt(null, 1), "This is a test!");
console.log(encrypt("This is a test!", 0), "This is a test!");
console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2), "s eT ashi tist!");
console.log(encrypt("This is a test!", 3), " Tah itse sits!");
console.log(encrypt("This is a test!", 4), "This is a test!");
console.log(encrypt("This is a test!", -1), "This is a test!");
console.log(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");

console.log(decrypt("This is a test!", 0), "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
console.log(decrypt("This is a test!", 4), "This is a test!");
console.log(decrypt("This is a test!", -1), "This is a test!");
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");

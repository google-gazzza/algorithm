// playing-with-passphrases
// https://www.codewars.com/kata/559536379512a64472000053

const playPass = (s, n) => {
  return s.split('').map((char, i) => {
    let charCode = char.charCodeAt();
    
    if (64 < charCode && charCode < 91) {
      charCode = (char.charCodeAt() - 65 + n) % 26 + 65;
      if (i % 2 === 1) {
        charCode = charCode + 32;
      }
    }
    
    if (47 < charCode && charCode < 58) {
      charCode = 9 - (charCode - 48) + 48;
    }
    
    return String.fromCharCode(charCode);
  }).reverse().join('');
};

console.log(playPass("I LOVE YOU!!!", 1), "!!!vPz fWpM J");
console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2),
  "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO");

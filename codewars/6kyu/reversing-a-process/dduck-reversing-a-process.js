// reversing-a-process
// https://www.codewars.com/kata/5dad6e5264e25a001918a1fc

const decode = (r) => {
  let num = r.match(/[0-9]+/g)[0];
  const str = [...r.slice(num.length)].map((v) => v.charCodeAt(0) - 97);
  num = parseInt(num, 10);
  
  const decodeMap = [];
  for (let i = 0; i < 26; i += 1) {
    decodeMap.push(i * num % 26);
  }
  
  if (new Set(decodeMap).size !== 26) {
    return 'Impossible to decode';
  }
  
  return str.map((v) => String.fromCharCode(decodeMap.indexOf(v) + 97)).join('');
};

console.log(decode("1273409kuqhkoynvvknsdwljantzkpnmfgf"), "uogbucwnddunktsjfanzlurnyxmx");
console.log(decode("1544749cdcizljymhdmvvypyjamowl"), "mfmwhbpoudfujjozopaugcb");
console.log(decode("105860ymmgegeeiwaigsqkcaeguicc"), "Impossible to decode");
console.log(decode("1122305vvkhrrcsyfkvejxjfvafzwpsdqgp"), "rrsxppowmjsrclfljrajtybwviqb");

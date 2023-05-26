// digital-cypher
// Digital cypher
// https://www.codewars.com/kata/592e830e043b99888600002d

const encode = (str, n) => {
  const code = String(n);
  return [...str].map((v, i) => v.charCodeAt(0) - 96 + Number(code[i % code.length]));
};



console.log(encode("scout", 1939), [20, 12, 18, 30, 21]);
console.log(encode("masterpiece", 1939), [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]);

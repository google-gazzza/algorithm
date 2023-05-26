// bin-to-decimal
// Bin to Decimal
// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/

const binToDec = (n) => parseInt(n, 2);



[["1", 1], ["0", 0], ["1001001", 73]].map(([inp, exp]) => [binToDec(inp), exp]);

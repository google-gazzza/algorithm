// credit-card-issuer-checking
// Credit card issuer checking
// difficulty: 7kyu
// https://www.codewars.com/kata/5701e43f86306a615c001868

const getIssuer = (number) => {
  if (/^(34|37)/.test(number) && String(number).length === 15) {
    return 'AMEX';
  }
  
  if (/^6011/.test(number) && String(number).length === 16) {
    return 'Discover';
  }
  
  if (/^(51|52|53|54|55)/.test(number) && String(number).length === 16) {
    return 'Mastercard';
  }
  
  if (/^4/.test(number) && (String(number).length === 13 || String(number).length === 16)) {
    return 'VISA';
  }
  
  return 'Unknown';
};

// calculate-price-excluding-vat
// Calculate Price Excluding VAT
// https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/

const excludingVatPrice = (price) => price !== null ? Number((price / 1.15).toFixed(2)) : -1;


console.log(excludingVatPrice(230), 200.00);
console.log(excludingVatPrice(123), 106.96);

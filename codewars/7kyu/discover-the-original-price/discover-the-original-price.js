// discover-the-original-price
// Discover The Original Price
// difficulty: 7kyu
// https://www.codewars.com/kata/552564a82142d701f5001228/

function discoverOriginalPrice(discountedPrice, salePercentage) {
  const result = (discountedPrice / (1 - (salePercentage / 100)));
  return result % 1 !== 0 ? Number(result.toFixed(2)) : result;
}


console.log(discoverOriginalPrice(75, 25), 100);
console.log(discoverOriginalPrice(25, 75), 100);
console.log(discoverOriginalPrice(75.75, 25), 101);

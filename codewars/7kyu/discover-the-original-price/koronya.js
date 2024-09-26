// [JS][7kyu] Discover The Original Price
// discover-the-original-price
// https://www.codewars.com/kata/552564a82142d701f5001228/train/javascript

const discoverOriginalPrice = (discountedPrice, salePercentage) => {
  const result = discountedPrice / (1 - salePercentage / 100)
  return Math.round(result * 100) / 100
}

discoverOriginalPrice(75, 25) === 100
discoverOriginalPrice(25, 75) === 100
discoverOriginalPrice(75.75, 25) === 101

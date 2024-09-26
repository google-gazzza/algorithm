/*
going-to-the-cinema

# codewars/7kyu/Going to the cinema
Difficulty: 7kyu
URL: https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/
Tags

## Approach

### en

### kr

## Solution
### JavaScript
*/

function movie(prePaidCardPrice, ticketPrice, discountRate) {
  let count = 1;
  let aSum = prePaidCardPrice + (ticketPrice * discountRate);
  let bSum = ticketPrice;
  
  while (!(Math.ceil(aSum) < (bSum))) {
    count += 1;
    aSum += ticketPrice * (discountRate ** count);
    bSum += ticketPrice;
  }
  
  return count;
}

// test
console.log(movie(500, 15, 0.9), 43);
console.log(movie(100, 10, 0.95), 24);
console.log(movie(0, 10, 0.95));

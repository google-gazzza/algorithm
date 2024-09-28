// [JS][7kyu] Going to the cinema
// going-to-the-cinema
// https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/train/javascript

const movie = (card, ticket, perc) => {
  let a = 0
  let b = card
  let count = 0
  while (Math.ceil(b) >= a) {
    count += 1
    a += ticket
    b += ticket * perc ** count
  }
  return count
}

movie(500, 15, 0.9) === 43
movie(100, 10, 0.95) === 24

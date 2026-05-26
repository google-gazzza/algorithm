// [JS][7kyu] Evens and Odds
// evens-and-odds
// https://www.codewars.com/kata/583ade15666df5a64e000058/train/javascript

const evensAndOdds = (num) => (num % 2 === 0 ? num.toString(2) : num.toString(16))

evensAndOdds(2) === '10'
evensAndOdds(13) === 'd'
evensAndOdds(47) === '2f'
evensAndOdds(0) === '0'
evensAndOdds(12800) === '11001000000000'
evensAndOdds(8172381723) === '1e71ca61b'

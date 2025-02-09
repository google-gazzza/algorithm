// [JS][7kyu] Sushi-go-round (Beginner's)
// sushi-go-round-beginner-s
// https://www.codewars.com/kata/59619e4609868dd923000041/train/javascript

const totalBill = (str) => {
  const sushiLen = str.split('').filter((char) => char === 'r').length
  return (sushiLen - Math.floor(sushiLen / 5)) * 2
}

totalBill('rr') === 4
totalBill('rr rrr') === 8
totalBill('rr rrr rrr rr') === 16
totalBill('rrrrrrrrrrrrrrrrrr   rr r') === 34
totalBill('') === 0

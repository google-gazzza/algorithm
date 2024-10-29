// [JS][7kyu] Hero's root
// hero-s-root
// https://www.codewars.com/kata/55efecb8680f47654c000095/train/javascript

const intRac = (n, guess) => {
  let count = 0
  while (true) {
    count += 1
    const x = Math.floor((guess + n / guess) / 2)
    if (Math.abs(x - guess) < 1) {
      return count
    }
    guess = x
  }
}

intRac(25, 1) === 4
intRac(125348, 300) === 3
intRac(236, 12) === 2
intRac(48981764, 8000, 3) === 3
intRac(6999, 700) === 6
intRac(16000, 400) === 5

// must be 30
intRac(835871232077058, 1) === 30

// must be 11
intRac(5653888, 20) === 11

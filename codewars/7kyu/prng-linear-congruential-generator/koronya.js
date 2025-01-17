// [JS][7kyu] PRNG: Linear Congruential Generator
// prng-linear-congruential-generator
// https://www.codewars.com/kata/594979a364becbc1ab00003a/train/javascript

class LCG {
  constructor(x) {
    this.a = 2
    this.c = 3
    this.m = 10
    this.x = x
  }
  random() {
    const result = (this.a * this.x + this.c) % this.m
    this.x = result
    return result / 10
  }
}

const lcg = new LCG(5)

lcg.random()

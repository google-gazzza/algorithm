// [JS][6kyu] How much hex is the fish
// how-much-hex-is-the-fish
// https://www.codewars.com/kata/5714eb80e1bf814e53000c06/train/javascript

const VALID_LIST = ['a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F']

const fisHex = (name) => {
  return name
    .split('')
    .filter((char) => VALID_LIST.includes(char))
    .reduce((acc, cur) => acc ^ parseInt(cur, 16), 0)
}

// fisHex('pufferfish') === 1
// fisHex('puffers') === 14
// fisHex('balloonfish') === 14
// fisHex('blowfish') === 4
// fisHex('bubblefish') === 10
// fisHex('globefish') === 10
// fisHex('swellfish') === 1
// fisHex('toadfish') === 8
// fisHex('toadies') === 9
// fisHex('honey toads') === 9
// fisHex('sugar toads') === 13
// fisHex('sea squab') === 5
// fisHex(' ') === 0
// fisHex('Aeneus corydoras') === 1

// https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7/

// recursive solution
const squaresNeeded = (grains, unit = 1, step = 0) => {
  return grains < 1 ? step : squaresNeeded(grains - unit, unit * 2, step + 1);
};

// bit length solution
// inspired from python best practice
const squaresNeededBit = (grains) => (grains ? grains.toString(2).length : 0);

// test case
console.log(squaresNeededBit(0), 0);
console.log(squaresNeededBit(1), 1);
console.log(squaresNeededBit(2), 2);
console.log(squaresNeededBit(3), 2);
console.log(squaresNeededBit(4), 3);

/*
best practice in codewars
written by [gideo, Voile, ASDFGerte, ajaczgz, Theplay4play, swalchemist] (plus 46 more warriors)

function squaresNeeded(grains){
  return Math.ceil(Math.log2(grains+1))
}
 */

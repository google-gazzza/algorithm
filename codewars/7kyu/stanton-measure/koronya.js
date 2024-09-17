// [JS][7kyu] Stanton measure
// stanton-measure
// https://www.codewars.com/kata/59a1cdde9f922b83ee00003b/train/javascript

/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array
*/

const stantonMeasure = (arr) => {
  const oneCount = arr.filter((x) => x === 1).length
  return arr.filter((x) => x === oneCount).length
}

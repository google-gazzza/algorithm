// [JS][8kyu]Counting sheep..
// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

const countSheeps = (arrayOfSheep) =>
  arrayOfSheep.filter((item) => item === true).length;

const array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

countSheeps(array1) === 17;

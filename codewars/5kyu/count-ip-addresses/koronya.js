// [JS][5kyu] Count IP Addresses
// count-ip-addresses
// https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

const arr = [256 ** 3, 256 ** 2, 256, 1]
const getAdjustNumber = (str) => str.split('.').reduce((acc, cur, index) => acc + cur * arr[index], 0)
const ipsBetween = (start, end) => getAdjustNumber(end) - getAdjustNumber(start)
const doTest = (start, end, expected) => ipsBetween(start, end) === expected

doTest('150.0.0.0', '150.0.0.1', 1)
doTest('10.0.0.0', '10.0.0.50', 50)
doTest('20.0.0.10', '20.0.1.0', 246)
doTest('10.11.12.13', '10.11.13.0', 243)
doTest('160.0.0.0', '160.0.1.0', 256)
doTest('170.0.0.0', '170.1.0.0', 65536)
doTest('50.0.0.0', '50.1.1.1', 65793)
doTest('180.0.0.0', '181.0.0.0', 16777216)
doTest('1.2.3.4', '5.6.7.8', 67372036)
doTest('0.0.0.0', '255.255.255.255', 2 ** 32 - 1)
